// Configuration
const CONFIG = {
  TAAMS_ADDRESS: '0x123...', // Remplacez par votre adresse
  NETWORK_ID: 1,
  VERSION: '2.3.0'
};

// Variables globales
let web3, taamsContract, account;
let cellSize = 10; // Pour le jeu Snake

// Initialisation
document.addEventListener('DOMContentLoaded', async () => {
  initEventListeners();
  initSnakeGame();
  
  // Détection mobile
  if (isMobileDevice()) {
    // Ajustements spécifiques mobile
    document.getElementById('stakeInput').setAttribute('inputmode', 'decimal');
    
    // Vérification MetaMask
    if (!isMetaMaskInstalled()) {
      const walletBtn = document.getElementById('walletBtn');
      walletBtn.innerHTML = '<i class="fas fa-external-link-alt me-2"></i>Installer MetaMask';
      walletBtn.onclick = () => window.open('https://metamask.io/download.html');
    }
  }

  if (window.ethereum?.selectedAddress) {
    await connectWallet();
  }
});

// Gestion du wallet (optimisé mobile)
async function connectWallet() {
  try {
    // Solution pour mobile
    if (isMobileDevice() && !isMetaMaskInstalled()) {
      window.location.href = getMetaMaskDeepLink();
      return;
    }

    if (!window.ethereum) throw new Error("MetaMask non détecté");
    
    web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    
    taamsContract = new web3.eth.Contract(
      CONTRACTS.TAAMS.abi,
      CONFIG.TAAMS_ADDRESS
    );
    
    updateWalletUI();
    loadData();
    
    // Gestion des changements
    window.ethereum.on('accountsChanged', () => window.location.reload());
    window.ethereum.on('chainChanged', () => window.location.reload());
    
  } catch (error) {
    showError(handleWalletError(error));
  }
}

function handleWalletError(error) {
  console.error("Erreur wallet:", error);
  if (error.code === 4001) return "Connexion annulée";
  if (error.code === -32002) return "Déjà en cours de traitement";
  return "Erreur de connexion au wallet";
}

// Jeu Snake (optimisé mobile)
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
    // Ajustement taille canvas
    const size = Math.min(window.innerWidth * 0.9, 400);
    canvas.width = size;
    canvas.height = size;
    cellSize = Math.floor(size / 30);

    // Initialisation jeu
    snake = [{x: Math.floor(15 * cellSize), y: Math.floor(15 * cellSize)}];
    food = {};
    dx = cellSize;
    dy = 0;
    score = 0;
    generateFood();
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(mainGameLoop, 150);
    scoreDisplay.textContent = `Score: ${score}`;
  }

  function generateFood() {
    food = {
      x: Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize,
      y: Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize
    };
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
      head.x < 0 || head.x >= canvas.width ||
      head.y < 0 || head.y >= canvas.height ||
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
    // Fond
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Serpent
    ctx.fillStyle = '#9d50bb';
    snake.forEach(segment => {
      ctx.fillRect(segment.x, segment.y, cellSize, cellSize);
      ctx.strokeStyle = '#6e48aa';
      ctx.strokeRect(segment.x, segment.y, cellSize, cellSize);
    });
    
    // Nourriture
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(food.x + cellSize/2, food.y + cellSize/2, cellSize/2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Contrôles
  document.addEventListener('keydown', e => {
    if (gameContainer.style.display !== 'flex') return;
    
    const key = e.key;
    if (key === 'ArrowUp' && dy <= 0) { dx = 0; dy = -cellSize; }
    if (key === 'ArrowDown' && dy >= 0) { dx = 0; dy = cellSize; }
    if (key === 'ArrowLeft' && dx <= 0) { dx = -cellSize; dy = 0; }
    if (key === 'ArrowRight' && dx >= 0) { dx = cellSize; dy = 0; }
  });

  // Contrôles tactiles
  document.querySelectorAll('.touch-btn').forEach(btn => {
    btn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const dir = btn.getAttribute('data-direction');
      if (dir === 'up' && dy <= 0) { dx = 0; dy = -cellSize; }
      if (dir === 'down' && dy >= 0) { dx = 0; dy = cellSize; }
      if (dir === 'left' && dx <= 0) { dx = -cellSize; dy = 0; }
      if (dir === 'right' && dx >= 0) { dx = cellSize; dy = 0; }
    });
  });

  // Boutons
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

// [Les autres fonctions (loadData, calculateLevel, etc.) restent identiques à la version précédente]