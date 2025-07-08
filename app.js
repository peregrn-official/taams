// Configuration
const CONFIG = {
  TAAMS_ADDRESS: CONTRACTS.TAAMS.address,
  VERSION: '2.5.0',
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
  
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts.length === 0) throw new Error("Aucun compte connecté");
    
    state.account = accounts[0];
    state.contract = new state.web3.eth.Contract(
      CONTRACTS.TAAMS.abi,
      CONFIG.TAAMS_ADDRESS
    );
    
    updateUI();
    loadData();
    
    // Écouteurs d'événements
    window.ethereum.on('accountsChanged', () => window.location.reload());
    window.ethereum.on('chainChanged', () => window.location.reload());
    
  } catch (error) {
    if (error.code === 4001) {
      throw new Error("Connexion annulée par l'utilisateur");
    }
    throw error;
  }
}

// Jeu Snake
function initGame() {
  const canvas = document.getElementById('snakeCanvas');
  const ctx = canvas.getContext('2d');
  const modal = document.getElementById('gameModal');
  
  let snake = [], food = {}, dx = 0, dy = 0, score = 0, gameLoop;
  let cellSize = 20;

  function resizeCanvas() {
    const size = Math.min(window.innerWidth * 0.8, 400);
    canvas.width = size - (size % cellSize);
    canvas.height = size - (size % cellSize);
  }

  function startGame() {
    resizeCanvas();
    snake = [{x: Math.floor(canvas.width/2/cellSize)*cellSize, y: Math.floor(canvas.height/2/cellSize)*cellSize}];
    placeFood();
    dx = cellSize;
    dy = 0;
    score = 0;
    updateScore();
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(gameStep, 150);
    state.game.isRunning = true;
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
    } else {
      snake.pop();
    }
  }

  function drawGame() {
    // Clear canvas
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake
    ctx.fillStyle = '#9d50bb';
    snake.forEach(segment => {
      ctx.fillRect(segment.x, segment.y, cellSize, cellSize);
      ctx.strokeStyle = '#6e48aa';
      ctx.strokeRect(segment.x, segment.y, cellSize, cellSize);
    });
    
    // Draw food
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
    alert(`Game Over! Votre score: ${score}`);
  }

  // Contrôles
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
    btn.addEventListener('touchstart', (e) => {
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
  document.getElementById('playSnakeBtn').addEventListener('click', () => {
    modal.style.display = 'flex';
    startGame();
  });

  document.getElementById('restartGameBtn').addEventListener('click', startGame);
  document.getElementById('closeGameBtn').addEventListener('click', () => {
    modal.style.display = 'none';
    clearInterval(gameLoop);
    state.game.isRunning = false;
  });

  window.addEventListener('resize', () => {
    if (state.game.isRunning) {
      resizeCanvas();
    }
  });
}

// Gestion des données
async function loadData() {
  if (!state.account) return;
  
  try {
    // Solde
    const balance = await state.contract.methods.balanceOf(state.account).call();
    document.getElementById('tokenBalance').textContent = state.web3.utils.fromWei(balance, 'ether');
    
    // Staking
    const stake = await state.contract.methods.stakes(state.account).call();
    const stakedAmount = state.web3.utils.fromWei(stake.amount, 'ether');
    document.getElementById('stakedAmount').textContent = stakedAmount;
    
    // Récompenses
    const rewards = calculateRewards(stake.amount, stake.timestamp);
    document.getElementById('rewards').textContent = parseFloat(rewards).toFixed(4);
    
    // Badges
    updateBadges(stakedAmount);
    
  } catch (error) {
    console.error("Load data error:", error);
    showError("Erreur de chargement des données");
  }
}

function calculateRewards(amount, timestamp) {
  const duration = (Date.now() / 1000 - timestamp) / 86400; // jours
  return (duration * amount * 0.01) / 1e18; // 1% par jour
}

function updateBadges(stakedAmount) {
  const amount = parseFloat(stakedAmount);
  const container = document.getElementById('badgesContainer');
  container.innerHTML = '';
  
  CONFIG.BADGE_LEVELS.forEach((badge, index) => {
    const active = amount >= badge.threshold;
    const nextLevel = CONFIG.BADGE_LEVELS[index + 1];
    let progress = 0;
    
    if (nextLevel) {
      progress = Math.min(100, ((amount - badge.threshold) / (nextLevel.threshold - badge.threshold)) * 100);
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
  document.getElementById('currentLevel').textContent = currentLevel;
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
    await state.contract.methods.stake(state.web3.utils.toWei(amount, 'ether'))
      .send({ from: state.account });
    loadData();
  } catch (error) {
    showError("Échec du staking: " + (error.message || "Annulé par l'utilisateur"));
  }
}

async function unstakeTokens() {
  try {
    await state.contract.methods.unstake()
      .send({ from: state.account });
    loadData();
  } catch (error) {
    showError("Échec du retrait: " + (error.message || "Annulé par l'utilisateur"));
  }
}

async function claimRewards() {
  try {
    await state.contract.methods.claimRewards()
      .send({ from: state.account });
    loadData();
  } catch (error) {
    showError("Échec du claim: " + (error.message || "Annulé par l'utilisateur"));
  }
}

// UI Helpers
function updateUI() {
  const btn = document.getElementById('walletBtn');
  btn.innerHTML = `<i class="fas fa-check-circle me-2"></i>${shortAddress(state.account)}`;
  btn.classList.add('connected');
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

function setupEventListeners() {
  document.getElementById('stakeBtn').addEventListener('click', stakeTokens);
  document.getElementById('unstakeBtn').addEventListener('click', unstakeTokens);
  document.getElementById('claimBtn').addEventListener('click', claimRewards);
  
  // Gestion du clavier pour le jeu
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    e.preventDefault();
  }, { passive: false });
}