// Configuration
const CONFIG = {
  TAAMS_ADDRESS: CONTRACTS.TAAMS.address,
  VERSION: '2.6.0',
  BADGE_LEVELS: [
    { name: "Novice", icon: "fa-seedling", color: "#9e9e9e", threshold: 0 },
    { name: "Bronze", icon: "fa-award", color: "#cd7f32", threshold: 500 },
    { name: "Silver", icon: "fa-medal", color: "#c0c0c0", threshold: 1000 },
    { name: "Gold", icon: "fa-trophy", color: "#ffd700", threshold: 2000 },
    { name: "Platinum", icon: "fa-gem", color: "#e5e4e2", threshold: 5000 },
    { name: "Diamond", icon: "fa-crown", color: "#b9f2ff", threshold: 10000 }
  ],
  REWARD_RATE: 0.01 // 1% daily
};

// State Management
class AppState {
  constructor() {
    this.web3 = null;
    this.contract = null;
    this.account = null;
    this.balance = 0;
    this.staked = 0;
    this.rewards = 0;
    this.game = {
      instance: null,
      score: 0,
      isRunning: false,
      speed: 150
    };
  }
}

const state = new AppState();

// UI Elements
const UI = {
  elements: {
    walletBtn: document.getElementById('walletBtn'),
    tokenBalance: document.getElementById('tokenBalance'),
    stakedAmount: document.getElementById('stakedAmount'),
    rewards: document.getElementById('rewards'),
    stakeInput: document.getElementById('stakeInput'),
    currentLevel: document.getElementById('currentLevel'),
    levelProgress: document.getElementById('levelProgress'),
    nextLevelInfo: document.getElementById('nextLevelInfo'),
    badgesContainer: document.getElementById('badgesContainer'),
    gameScore: document.getElementById('gameScore'),
    loadingScreen: document.getElementById('loadingScreen')
  },
  
  showLoading(show) {
    if (show) {
      this.elements.loadingScreen.style.display = 'flex';
      this.elements.loadingScreen.style.opacity = '1';
    } else {
      this.elements.loadingScreen.style.opacity = '0';
      setTimeout(() => {
        this.elements.loadingScreen.style.display = 'none';
      }, 500);
    }
  },
  
  showError(message, duration = 5000) {
    const errorEl = document.createElement('div');
    errorEl.className = 'alert alert-danger position-fixed top-0 start-50 translate-middle-x mt-3 z-3';
    errorEl.style.minWidth = '300px';
    errorEl.textContent = message;
    document.body.appendChild(errorEl);
    
    setTimeout(() => {
      errorEl.style.opacity = '0';
      setTimeout(() => errorEl.remove(), 500);
    }, duration);
  },
  
  updateWalletInfo() {
    this.elements.tokenBalance.textContent = state.balance.toFixed(2);
    this.elements.stakedAmount.textContent = state.staked.toFixed(2);
    this.elements.rewards.textContent = state.rewards.toFixed(4);
    
    if (state.account) {
      this.elements.walletBtn.innerHTML = `<i class="fas fa-check-circle me-2"></i>${this.shortAddress(state.account)}`;
      this.elements.walletBtn.classList.add('connected');
    } else {
      this.elements.walletBtn.innerHTML = `<i class="fas fa-wallet me-2"></i>Connect Wallet`;
      this.elements.walletBtn.classList.remove('connected');
    }
  },
  
  shortAddress(address) {
    return address ? `${address.substring(0, 6)}...${address.substring(38)}` : '';
  }
};

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initWallet();
    initGame();
    setupEventListeners();
    UI.showLoading(false);
  } catch (error) {
    UI.showError(`Initialization failed: ${error.message}`);
    console.error("Init error:", error);
    UI.showLoading(false);
  }
});

// Wallet Management
async function initWallet() {
  if (!window.ethereum) {
    if (ENV.isMobile) {
      window.location.href = ENV.getMetaMaskLink();
      return;
    }
    throw new Error("MetaMask not detected");
  }

  state.web3 = new Web3(window.ethereum);
  
  // Check if already connected
  const accounts = await state.web3.eth.getAccounts();
  if (accounts.length > 0) {
    state.account = accounts[0];
    await setupContract();
    await loadData();
  }
  
  // Setup event listeners
  window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length > 0) {
      state.account = accounts[0];
      UI.updateWalletInfo();
      loadData();
    } else {
      state.account = null;
      UI.updateWalletInfo();
    }
  });
  
  window.ethereum.on('chainChanged', () => window.location.reload());
}

async function connectWallet() {
  try {
    UI.showLoading(true);
    await checkNetwork();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    state.account = accounts[0];
    await setupContract();
    UI.updateWalletInfo();
    await loadData();
  } catch (error) {
    UI.showError(error.message);
  } finally {
    UI.showLoading(false);
  }
}

async function setupContract() {
  state.contract = new state.web3.eth.Contract(
    CONTRACTS.TAAMS.abi,
    CONFIG.TAAMS_ADDRESS
  );
}

// Data Management
async function loadData() {
  if (!state.account) return;
  
  try {
    UI.showLoading(true);
    
    // Fetch balance
    const balance = await state.contract.methods.balanceOf(state.account).call();
    state.balance = parseFloat(state.web3.utils.fromWei(balance, 'ether'));
    
    // Fetch staking data
    const stake = await state.contract.methods.stakes(state.account).call();
    state.staked = parseFloat(state.web3.utils.fromWei(stake.amount, 'ether'));
    state.rewards = calculateRewards(stake.amount, stake.timestamp);
    
    // Update UI
    UI.updateWalletInfo();
    updateBadges();
    updateLevelProgress();
    
  } catch (error) {
    console.error("Load data error:", error);
    UI.showError("Failed to load data");
  } finally {
    UI.showLoading(false);
  }
}

function calculateRewards(amount, timestamp) {
  if (amount == 0) return 0;
  const duration = (Date.now() / 1000 - timestamp) / 86400; // in days
  return (duration * amount * CONFIG.REWARD_RATE) / 1e18;
}

function updateLevelProgress() {
  const currentLevel = calculateLevel(state.staked);
  const nextLevel = CONFIG.BADGE_LEVELS[currentLevel + 1];
  
  UI.elements.currentLevel.textContent = CONFIG.BADGE_LEVELS[currentLevel].name;
  
  if (nextLevel) {
    const progress = Math.min(100, 
      ((state.staked - CONFIG.BADGE_LEVELS[currentLevel].threshold) / 
      (nextLevel.threshold - CONFIG.BADGE_LEVELS[currentLevel].threshold)) * 100
    );
    UI.elements.levelProgress.style.width = `${progress}%`;
    UI.elements.nextLevelInfo.textContent = `Next: ${nextLevel.name} (${nextLevel.threshold} TAAMS)`;
  } else {
    UI.elements.levelProgress.style.width = '100%';
    UI.elements.nextLevelInfo.textContent = 'Max level reached';
  }
}

function calculateLevel(stakedAmount) {
  for (let i = CONFIG.BADGE_LEVELS.length - 1; i >= 0; i--) {
    if (stakedAmount >= CONFIG.BADGE_LEVELS[i].threshold) {
      return i;
    }
  }
  return 0;
}

function updateBadges() {
  UI.elements.badgesContainer.innerHTML = '';
  
  CONFIG.BADGE_LEVELS.forEach((badge, index) => {
    const active = state.staked >= badge.threshold;
    let progress = 0;
    let nextThreshold = null;
    
    if (index < CONFIG.BADGE_LEVELS.length - 1) {
      nextThreshold = CONFIG.BADGE_LEVELS[index + 1].threshold;
      progress = Math.min(100, 
        ((state.staked - badge.threshold) / (nextThreshold - badge.threshold)) * 100
      );
    } else if (active) {
      progress = 100;
    }
    
    const badgeEl = document.createElement('div');
    badgeEl.className = `badge-card ${active ? 'active' : ''}`;
    badgeEl.innerHTML = `
      <div class="badge-icon" style="color: ${badge.color}">
        <i class="fas ${badge.icon}"></i>
      </div>
      <h5>${badge.name}</h5>
      <div class="progress mt-2 bg-dark" style="height: 5px;">
        <div class="progress-bar" style="width: ${progress}%; background: ${badge.color}"></div>
      </div>
      <small>${badge.threshold}+ TAAMS</small>
    `;
    
    badgeEl.addEventListener('click', () => {
      if (!active && nextThreshold) {
        UI.showError(`Reach ${nextThreshold} TAAMS to unlock ${CONFIG.BADGE_LEVELS[index + 1].name} tier`);
      }
    });
    
    UI.elements.badgesContainer.appendChild(badgeEl);
  });
}

// Transactions
async function stakeTokens() {
  const amount = parseFloat(UI.elements.stakeInput.value);
  if (!amount || amount <= 0) {
    UI.showError("Please enter a valid amount");
    return;
  }

  try {
    UI.showLoading(true);
    await state.contract.methods.stake(state.web3.utils.toWei(amount.toString(), 'ether'))
      .send({ from: state.account });
    await loadData();
    UI.elements.stakeInput.value = '';
  } catch (error) {
    UI.showError(`Staking failed: ${error.message || "User denied transaction"}`);
  } finally {
    UI.showLoading(false);
  }
}

async function unstakeTokens() {
  try {
    UI.showLoading(true);
    await state.contract.methods.unstake()
      .send({ from: state.account });
    await loadData();
  } catch (error) {
    UI.showError(`Unstaking failed: ${error.message || "User denied transaction"}`);
  } finally {
    UI.showLoading(false);
  }
}

async function claimRewards() {
  try {
    UI.showLoading(true);
    await state.contract.methods.claimRewards()
      .send({ from: state.account });
    await loadData();
  } catch (error) {
    UI.showError(`Claim failed: ${error.message || "User denied transaction"}`);
  } finally {
    UI.showLoading(false);
  }
}

// Game Implementation
function initGame() {
  const canvas = document.getElementById('snakeCanvas');
  const ctx = canvas.getContext('2d');
  const modal = new bootstrap.Modal(document.getElementById('gameModal'));
  
  let snake = [], food = {}, dx = 0, dy = 0, score = 0, gameLoop;
  const cellSize = 20;

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
    state.game.speed = 150;
    updateScore();
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(gameStep, state.game.speed);
    state.game.isRunning = true;
    modal.show();
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
      // Increase speed every 50 points
      if (score % 50 === 0 && state.game.speed > 50) {
        state.game.speed -= 5;
        clearInterval(gameLoop);
        gameLoop = setInterval(gameStep, state.game.speed);
      }
    } else {
      snake.pop();
    }
  }

  function drawGame() {
    // Clear canvas
    ctx.fillStyle = '#0f0f1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake
    snake.forEach((segment, index) => {
      const gradient = ctx.createLinearGradient(segment.x, segment.y, segment.x + cellSize, segment.y + cellSize);
      gradient.addColorStop(0, index === 0 ? '#6e48aa' : '#9d50bb');
      gradient.addColorStop(1, index === 0 ? '#00f0ff' : '#6e48aa');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(segment.x, segment.y, cellSize, cellSize);
      ctx.strokeStyle = '#6e48aa';
      ctx.strokeRect(segment.x, segment.y, cellSize, cellSize);
    });
    
    // Draw food
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(food.x + cellSize/2, food.y + cellSize/2, cellSize/2, 0, Math.PI*2);
    ctx.fill();
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function placeFood() {
    const maxX = Math.floor(canvas.width / cellSize);
    const maxY = Math.floor(canvas.height / cellSize);
    
    do {
      food = {
        x: Math.floor(Math.random() * maxX) * cellSize,
        y: Math.floor(Math.random() * maxY) * cellSize
      };
    } while (snake.some(segment => segment.x === food.x && segment.y === food.y));
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
    UI.elements.gameScore.textContent = `Score: ${score}`;
    state.game.score = score;
  }

  function endGame() {
    clearInterval(gameLoop);
    state.game.isRunning = false;
    UI.showError(`Game Over! Your score: ${score}`, 3000);
  }

  // Event Listeners
  document.addEventListener('keydown', e => {
    if (!state.game.isRunning) return;
    
    switch(e.key) {
      case 'ArrowUp': if (dy === 0) { dx = 0; dy = -cellSize; } break;
      case 'ArrowDown': if (dy === 0) { dx = 0; dy = cellSize; } break;
      case 'ArrowLeft': if (dx === 0) { dx = -cellSize; dy = 0; } break;
      case 'ArrowRight': if (dx === 0) { dx = cellSize; dy = 0; } break;
    }
  });

  document.querySelectorAll('.touch-controls button').forEach(btn => {
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

  document.getElementById('playSnakeBtn').addEventListener('click', startGame);
  document.getElementById('restartGameBtn').addEventListener('click', () => {
    modal.hide();
    setTimeout(startGame, 300);
  });
  document.getElementById('closeGameBtn').addEventListener('click', () => {
    modal.hide();
    if (gameLoop) clearInterval(gameLoop);
    state.game.isRunning = false;
  });

  window.addEventListener('resize', resizeCanvas);
}

// Network Management
async function checkNetwork() {
  const chainId = await window.ethereum.request({ method: 'eth_chainId' });
  if (chainId !== `0x${NETWORK_CONFIG.chainId.toString(16)}`) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${NETWORK_CONFIG.chainId.toString(16)}` }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [NETWORK_CONFIG],
          });
        } catch (addError) {
          throw new Error("Please connect to Ethereum Mainnet");
        }
      }
      throw new Error("Failed to switch network");
    }
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Wallet
  UI.elements.walletBtn.addEventListener('click', connectWallet);
  
  // Staking
  UI.elements.stakeBtn.addEventListener('click', stakeTokens);
  UI.elements.unstakeBtn.addEventListener('click', unstakeTokens);
  UI.elements.claimBtn.addEventListener('click', claimRewards);
  UI.elements.refreshBtn.addEventListener('click', loadData);
  
  // Prevent form submission
  UI.elements.stakeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      stakeTokens();
    }
  });
  
  // Prevent scrolling with arrow keys
  document.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }
  }, { passive: false });
}