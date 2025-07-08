// Configuration
const CONFIG = {
  TAAMS_ADDRESS: '0x123...', // Remplacez par votre adresse
  NETWORK_ID: 1,
  VERSION: '2.2.0'
};

// Variables globales
let web3, taamsContract, account;

// Initialisation
document.addEventListener('DOMContentLoaded', async () => {
  initEventListeners();
  initSnakeGame();
  
  if (window.ethereum && window.ethereum.selectedAddress) {
    await connectWallet();
  }
});

// Gestion du wallet
async function connectWallet() {
  try {
    if (!window.ethereum) throw new Error("MetaMask non détecté");
    
    web3 = new Web3(window.ethereum);
    account = (await web3.eth.requestAccounts())[0];
    
    taamsContract = new web3.eth.Contract(
      CONTRACTS.TAAMS.abi,
      CONFIG.TAAMS_ADDRESS
    );
    
    updateWalletUI();
    loadData();
    
    window.ethereum.on('accountsChanged', () => window.location.reload());
    window.ethereum.on('chainChanged', () => window.location.reload());
    
  } catch (error) {
    showError(error.message);
  }
}

// Chargement des données
async function loadData() {
  if (!account) return;
  
  try {
    // Solde et staking
    const balance = await taamsContract.methods.balanceOf(account).call();
    document.getElementById('tokenBalance').textContent = web3.utils.fromWei(balance, 'ether');
    
    const stake = await taamsContract.methods.stakes(account).call();
    const stakedAmount = web3.utils.fromWei(stake.amount, 'ether');
    document.getElementById('stakedAmount').textContent = stakedAmount;
    
    // Calcul niveau et récompenses
    const level = calculateLevel(stakedAmount);
    const rewards = calculateRewards(stake.amount, stake.timestamp, level);
    
    // Mise à jour UI
    document.getElementById('rewards').textContent = rewards.toFixed(4);
    document.getElementById('currentLevel').textContent = level;
    document.getElementById('levelProgress').style.width = `${(level/5)*100}%`;
    
    updateVisualBadges(level, stakedAmount);
    
  } catch (error) {
    showError("Erreur de chargement");
  }
}

// Système de niveaux
function calculateLevel(stakedAmount) {
  const amount = parseFloat(stakedAmount);
  if (amount >= 10000) return 5;
  if (amount >= 5000) return 4;
  if (amount >= 2000) return 3; 
  if (amount >= 1000) return 2;
  if (amount >= 500) return 1;
  return 0;
}

function calculateRewards(amount, timestamp, level) {
  const duration = (Date.now() / 1000 - timestamp) / 86400;
  const multiplier = 1 + (level * 0.05);
  return (duration * amount * multiplier) / (100 * 1e18);
}

function updateVisualBadges(level, stakedAmount) {
  const badges = [
    { name: "Nouveau", icon: "fa-seedling", color: "#9e9e9e", req: 0 },
    { name: "Bronze", icon: "fa-award", color: "#cd7f32", req: 500 },
    { name: "Argent", icon: "fa-medal", color: "#c0c0c0", req: 1000 },
    { name: "Or", icon: "fa-trophy", color: "#ffd700", req: 2000 },
    { name: "Platine", icon: "fa-gem", color: "#e5e4e2", req: 5000 },
    { name: "Diamant", icon: "fa-crown", color: "#b9f2ff", req: 10000 }
  ];

  const currentBadge = badges[level];
  const nextLevel = level < 5 ? badges[level+1] : null;
  const progress = nextLevel ? Math.min(100, (stakedAmount / nextLevel.req) * 100) : 100;

  const badgeHTML = `
    <div class="badge-card ${level === 5 ? 'diamond-badge' : ''}" style="border-color: ${currentBadge.color}">
      <div class="badge-icon" style="color: ${currentBadge.color}">
        <i class="fas ${currentBadge.icon}"></i>
      </div>
      <h5>${currentBadge.name}</h5>
      <div class="progress mt-2">
        <div class="progress-bar" style="width: ${progress}%; background: ${currentBadge.color}"></div>
      </div>
      <small>${stakedAmount} / ${nextLevel?.req || 'MAX'} TAAMS</small>
    </div>
  `;

  document.getElementById('badgesContainer').innerHTML = badgeHTML;
}

// Mini-jeu Snake
function initSnakeGame() {
  const canvas = document.getElementById('snakeGame');
  const ctx = canvas.getContext('2d');
  const gameContainer = document.getElementById('snakeGameContainer');
  const playBtn = document.getElementById('playSnakeBtn');
  const restartBtn = document.getElementById('restartGameBtn');
  const closeBtn = document.getElementById('closeGameBtn');
  const scoreDisplay = document.getElementById('gameScore');

  let snake, food, dx, dy, score, gameLoop;

  function initGame() {
    snake = [{x: 150, y: 150}];
    food = {x: 0, y: 0};
    dx = 10;
    dy = 0;
    score = 0;
    generateFood();
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(mainGameLoop, 100);
    scoreDisplay.textContent = `Score: ${score}`;
  }

  function generateFood() {
    food.x = Math.floor(Math.random() * 30) * 10;
    food.y = Math.floor(Math.random() * 30) * 10;
  }

  function mainGameLoop() {
    if (isGameOver()) {
      clearInterval(gameLoop);
      alert(`Game Over! Score: ${score}`);
      return;
    }

    moveSnake();
    drawGame();
  }

  function isGameOver() {
    const head = snake[0];
    return (
      head.x < 0 || head.x >= 300 ||
      head.y < 0 || head.y >= 300 ||
      snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    );
  }

  function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      scoreDisplay.textContent = `Score: ${score}`;
      generateFood();
    } else {
      snake.pop();
    }
  }

  function drawGame() {
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#9d50bb';
    snake.forEach(segment => {
      ctx.fillRect(segment.x, segment.y, 10, 10);
      ctx.strokeStyle = '#6e48aa';
      ctx.strokeRect(segment.x, segment.y, 10, 10);
    });
    
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(food.x + 5, food.y + 5, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Événements
  document.addEventListener('keydown', e => {
    if (gameContainer.style.display !== 'flex') return;
    
    const key = e.key;
    if (key === 'ArrowUp' && dy === 0) { dx = 0; dy = -10; }
    if (key === 'ArrowDown' && dy === 0) { dx = 0; dy = 10; }
    if (key === 'ArrowLeft' && dx === 0) { dx = -10; dy = 0; }
    if (key === 'ArrowRight' && dx === 0) { dx = 10; dy = 0; }
  });

  playBtn.addEventListener('click', () => {
    gameContainer.style.display = 'flex';
    initGame();
  });

  restartBtn.addEventListener('click', initGame);
  closeBtn.addEventListener('click', () => {
    gameContainer.style.display = 'none';
    clearInterval(gameLoop);
  });
}

// Helpers
function updateWalletUI() {
  const btn = document.getElementById('walletBtn');
  btn.innerHTML = `<i class="fas fa-wallet me-2"></i>${account.slice(0,6)}...${account.slice(-4)}`;
  btn.classList.add('connected');
}

function showError(message, elementId = 'errorAlert') {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.classList.remove('d-none');
  setTimeout(() => element.classList.add('d-none'), 5000);
}

function initEventListeners() {
  document.getElementById('stakeBtn').addEventListener('click', stakeTokens);
  document.getElementById('claimBtn').addEventListener('click', claimRewards);
  document.getElementById('unstakeBtn').addEventListener('click', unstakeTokens);
}

async function stakeTokens() {
  const amount = document.getElementById('stakeInput').value;
  if (!amount || amount <= 0) return showError("Montant invalide", "stakeError");
  
  try {
    await taamsContract.methods.stake(web3.utils.toWei(amount, 'ether'))
      .send({ from: account });
    loadData();
  } catch (error) {
    showError("Échec du staking");
  }
}

async function claimRewards() {
  try {
    await taamsContract.methods.claimRewards().send({ from: account });
    loadData();
  } catch (error) {
    showError("Échec du claim");
  }
}

async function unstakeTokens() {
  try {
    await taamsContract.methods.unstake().send({ from: account });
    loadData();
  } catch (error) {
    showError("Échec de l'unstake");
  }
}