// Configuration
const CONFIG = {
  TAAMS_ADDRESS: CONTRACTS.TAAMS.address,
  VERSION: '2.5.1',
  BADGE_LEVELS: [
    { name: "Nouveau", icon: "fa-seedling", color: "#9e9e9e", threshold: 0 },
    { name: "Bronze", icon: "fa-award", color: "#cd7f32", threshold: 500 },
    { name: "Argent", icon: "fa-medal", color: "#c0c0c0", threshold: 1000 },
    { name: "Or", icon: "fa-trophy", color: "#ffd700", threshold: 2000 },
    { name: "Platine", icon: "fa-gem", color: "#e5e4e2", threshold: 5000 },
    { name: "Diamant", icon: "fa-crown", color: "#b9f2ff", threshold: 10000 }
  ]
};

// État global
let state = {
  web3: null,
  contract: null,
  account: null,
  game: {
    instance: null,
    score: 0,
    isRunning: false
  }
};

// Initialisation
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initWallet();
    initGame();
    setupEventListeners();
  } catch (error) {
    showError(`Initialisation échouée: ${error.message}`);
    console.error("Init error:", error);
  }
});

// Gestion du Wallet
async function initWallet() {
  if (!window.ethereum) {
    if (ENV.isMobile) {
      window.location.href = ENV.getMetaMaskLink();
      return;
    }
    throw new Error("MetaMask non détecté");
  }

  state.web3 = new Web3(window.ethereum);
  
  // Vérifier si déjà connecté
  const accounts = await state.web3.eth.getAccounts();
  if (accounts.length > 0) {
    state.account = accounts[0];
    await setupContract();
    updateUI();
    loadData();
  }

  // Écouteurs d'événements
  window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length > 0) {
      state.account = accounts[0];
      updateUI();
      loadData();
    } else {
      window.location.reload();
    }
  });
  
  window.ethereum.on('chainChanged', () => window.location.reload());
}

async function setupContract() {
  state.contract = new state.web3.eth.Contract(
    CONTRACTS.TAAMS.abi,
    CONFIG.TAAMS_ADDRESS
  );
}

// Connexion manuelle
async function connectWallet() {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    state.account = accounts[0];
    await setupContract();
    updateUI();
    loadData();
  } catch (error) {
    if (error.code === 4001) {
      showError("Connexion annulée par l'utilisateur");
    } else {
      showError(`Erreur de connexion: ${error.message}`);
    }
  }
}

// Jeu Snake (optimisé pour mobile et PC)
function initGame() {
  const canvas = document.getElementById('snakeCanvas');
  const ctx = canvas.getContext('2d');
  const modal = document.getElementById('gameModal');
  
  let snake = [], food = {}, dx = 0, dy = 0, score = 0, gameLoop;
  let cellSize = 20;
  let gameSpeed = 150;

  function resizeCanvas() {
    const size = Math.min(window.innerWidth * 0.8, 400);
    canvas.width = size - (size % cellSize);
    canvas.height = size - (size % cellSize);
    if (state.game.isRunning) drawGame();
  }

  function startGame() {
    resizeCanvas();
    snake = [{
      x: Math.floor(canvas.width/2/cellSize)*cellSize, 
      y: Math.floor(canvas.height/2/cellSize)*cellSize
    }];
    placeFood();
    dx = cellSize;
    dy = 0;
    score = 0;
    updateScore();
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(gameStep, gameSpeed);
    state.game.isRunning = true;
    modal.style.display = 'flex';
  }

  function gameStep() {
    if (checkCollision()) {
      endGame();
      return;
    }
    moveSnake();
    drawGame();
  }

  function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      updateScore();
      placeFood();
      // Augmenter la vitesse progressivement
      if (score % 50 === 0 && gameSpeed > 50) {
        gameSpeed -= 5;
        clearInterval(gameLoop);
        gameLoop = setInterval(gameStep, gameSpeed);
      }
    } else {
      snake.pop();
    }
  }

  function drawGame() {
    // Fond
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Serpent
    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? '#6e48aa' : '#9d50bb';
      ctx.fillRect(segment.x, segment.y, cellSize, cellSize);
      ctx.strokeStyle = '#6e48aa';
      ctx.strokeRect(segment.x, segment.y, cellSize, cellSize);
    });
    
    // Nourriture
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(food.x + cellSize/2, food.y + cellSize/2, cellSize/2, 0, Math.PI*2);
    ctx.fill();
  }

  function placeFood() {
    food = {
      x: Math.floor(Math.random() * (canvas.width/cellSize)) * cellSize,
      y: Math.floor(Math.random() * (canvas.height/cellSize)) * cellSize
    };
    // Vérifier que la nourriture n'apparaît pas sur le serpent
    while (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
      food.x = Math.floor(Math.random() * (canvas.width/cellSize)) * cellSize;
      food.y = Math.floor(Math.random() * (canvas.height/cellSize)) * cellSize;
    }
  }

  function checkCollision() {
    const head = snake[0];
    return (
      head.x < 0 || head.x >= canvas.width ||
      head.y < 0 || head.y >= canvas.height ||
      snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    );
  }

  function updateScore() {
    document.getElementById('gameScore').textContent = `Score: ${score}`;
  }

  function endGame() {
    clearInterval(gameLoop);
    state.game.isRunning = false;
    state.game.score = score;
    alert(`Game Over! Votre score: ${score}`);
  }

  // Contrôles clavier
  document.addEventListener('keydown', e => {
    if (!state.game.isRunning) return;
    
    switch(e.key) {
      case 'ArrowUp': if (dy === 0) { dx = 0; dy = -cellSize; } break;
      case 'ArrowDown': if (dy === 0) { dx = 0; dy = cellSize; } break;
      case 'ArrowLeft': if (dx === 0) { dx = -cellSize; dy = 0; } break;
      case 'ArrowRight': if (dx === 0) { dx = cellSize; dy = 0; } break;
    }
  });

  // Contrôles tactiles
  document.querySelectorAll('.touch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!state.game.isRunning) return;
      
      const dir = btn.getAttribute('data-direction');
      switch(dir) {
        case 'up': if (dy === 0) { dx = 0; dy = -cellSize; } break;
        case 'down': if (dy === 0) { dx = 0; dy = cellSize; } break;
        case 'left': if (dx === 0) { dx = -cellSize; dy = 0; } break;
        case 'right': if (dx === 0) { dx = cellSize; dy = 0; } break;
      }
    });
  });

  // Gestion de la modale
  document.getElementById('playSnakeBtn').addEventListener('click', startGame);
  document.getElementById('restartGameBtn').addEventListener('click', () => {
    gameSpeed = 150;
    startGame();
  });
  document.getElementById('closeGameBtn').addEventListener('click', () => {
    modal.style.display = 'none';
    clearInterval(gameLoop);
    state.game.isRunning = false;
  });

  window.addEventListener('resize', resizeCanvas);
}

// Gestion des données
async function loadData() {
  if (!state.account || !state.contract) return;
  
  try {
    showLoading(true);
    
    // Solde
    const balance = await state.contract.methods.balanceOf(state.account).call();
    document.getElementById('tokenBalance').textContent = parseFloat(state.web3.utils.fromWei(balance, 'ether')).toFixed(2);
    
    // Staking
    const stake = await state.contract.methods.stakes(state.account).call();
    const stakedAmount = state.web3.utils.fromWei(stake.amount, 'ether');
    document.getElementById('stakedAmount').textContent = parseFloat(stakedAmount).toFixed(2);
    
    // Récompenses
    const rewards = calculateRewards(stake.amount, stake.timestamp);
    document.getElementById('rewards').textContent = parseFloat(rewards).toFixed(4);
    
    // Badges
    updateBadges(stakedAmount);
    
  } catch (error) {
    console.error("Load data error:", error);
    showError("Erreur de chargement des données");
  } finally {
    showLoading(false);
  }
}

function calculateRewards(amount, timestamp) {
  if (amount == 0) return 0;
  const duration = (Date.now() / 1000 - timestamp) / 86400; // jours
  return (duration * amount * 0.01) / 1e18; // 1% par jour
}

function updateBadges(stakedAmount) {
  const amount = parseFloat(stakedAmount);
  const container = document.getElementById('badgesContainer');
  container.innerHTML = '';
  
  CONFIG.BADGE_LEVELS.forEach((badge, index) => {
    const active = amount >= badge.threshold;
    let progress = 0;
    let nextThreshold = null;
    
    if (index < CONFIG.BADGE_LEVELS.length - 1) {
      nextThreshold = CONFIG.BADGE_LEVELS[index + 1].threshold;
      progress = Math.min(100, ((amount - badge.threshold) / (nextThreshold - badge.threshold)) * 100);
    } else if (active) {
      progress = 100;
    }
    
    const badgeHTML = `
      <div class="badge-card ${active ? 'active' : ''}" style="border-color: ${badge.color}">
        <div class="badge-icon" style="color: ${badge.color}">
          <i class="fas ${badge.icon}"></i>
        </div>
        <h5>${badge.name}</h5>
        <div class="progress mt-2" style="height: 5px;">
          <div class="progress-bar" style="width: ${progress}%; background: ${badge.color}"></div>
        </div>
        <small>${badge.threshold}+ TAAMS</small>
      </div>
    `;
    
    container.innerHTML += badgeHTML;
  });
  
  // Mise à jour niveau actuel
  const currentLevel = calculateLevel(amount);
  document.getElementById('currentLevel').textContent = CONFIG.BADGE_LEVELS[currentLevel].name;
  document.getElementById('levelProgress').style.width = `${(currentLevel / (CONFIG.BADGE_LEVELS.length - 1)) * 100}%`;
}

function calculateLevel(stakedAmount) {
  const amount = parseFloat(stakedAmount);
  for (let i = CONFIG.BADGE_LEVELS.length - 1; i >= 0; i--) {
    if (amount >= CONFIG.BADGE_LEVELS[i].threshold) {
      return i;
    }
  }
  return 0;
}

// Gestion des transactions
async function stakeTokens() {
  const amount = document.getElementById('stakeInput').value;
  if (!amount || amount <= 0) {
    showError("Veuillez entrer un montant valide", "stakeError");
    return;
  }

  try {
    showLoading(true);
    await state.contract.methods.stake(state.web3.utils.toWei(amount, 'ether'))
      .send({ from: state.account });
    await loadData();
  } catch (error) {
    showError("Échec du staking: " + (error.message || "Annulé par l'utilisateur"));
  } finally {
    showLoading(false);
  }
}

async function unstakeTokens() {
  try {
    showLoading(true);
    await state.contract.methods.unstake()
      .send({ from: state.account });
    await loadData();
  } catch (error) {
    showError("Échec du retrait: " + (error.message || "Annulé par l'utilisateur"));
  } finally {
    showLoading(false);
  }
}

async function claimRewards() {
  try {
    showLoading(true);
    await state.contract.methods.claimRewards()
      .send({ from: state.account });
    await loadData();
  } catch (error) {
    showError("Échec du claim: " + (error.message || "Annulé par l'utilisateur"));
  } finally {
    showLoading(false);
  }
}

// UI Helpers
function updateUI() {
  const btn = document.getElementById('walletBtn');
  if (state.account) {
    btn.innerHTML = `<i class="fas fa-check-circle me-2"></i>${shortAddress(state.account)}`;
    btn.classList.add('connected');
    btn.removeEventListener('click', connectWallet);
  } else {
    btn.innerHTML = `<i class="fas fa-wallet me-2"></i>Connecter Wallet`;
    btn.classList.remove('connected');
    btn.addEventListener('click', connectWallet);
  }
}

function shortAddress(address) {
  return address ? `${address.substring(0, 6)}...${address.substring(38)}` : '';
}

function showError(message, elementId = 'errorAlert') {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.classList.remove('d-none');
  setTimeout(() => element.classList.add('d-none'), 5000);
}

function showLoading(show) {
  const loader = document.getElementById('loadingIndicator');
  if (show) {
    loader.classList.remove('d-none');
  } else {
    loader.classList.add('d-none');
  }
}

function setupEventListeners() {
  document.getElementById('stakeBtn').addEventListener('click', stakeTokens);
  document.getElementById('unstakeBtn').addEventListener('click', unstakeTokens);
  document.getElementById('claimBtn').addEventListener('click', claimRewards);
  
  // Empêcher le défilement avec les flèches
  document.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key) && 
        e.target.tagName !== 'INPUT') {
      e.preventDefault();
    }
  }, { passive: false });
}