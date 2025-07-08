// app.js
let web3;
let taamsContract;
let badgeContract;
let account;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  
  // Vérifier si déjà connecté
  if (window.ethereum && window.ethereum.selectedAddress) {
    connectWallet();
  }
});

function initEventListeners() {
  document.getElementById('walletBtn').addEventListener('click', connectWallet);
  document.getElementById('stakeBtn').addEventListener('click', stakeTokens);
  document.getElementById('claimBtn').addEventListener('click', claimRewards);
  document.getElementById('unstakeBtn').addEventListener('click', unstakeTokens);
}

async function connectWallet() {
  try {
    // Vérifier MetaMask
    if (!window.ethereum) {
      throw new Error("Veuillez installer MetaMask!");
    }

    // Demander la connexion
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
    
    // Initialiser Web3
    web3 = new Web3(window.ethereum);
    
    // Initialiser les contrats
    taamsContract = new web3.eth.Contract(
      CONTRACTS.TAAMS.abi,
      CONTRACTS.TAAMS.address
    );
    
    badgeContract = new web3.eth.Contract(
      CONTRACTS.BADGE.abi,
      CONTRACTS.BADGE.address
    );

    // Mettre à jour l'UI
    updateWalletUI();
    
    // Charger les données
    loadData();
    
    // Écouter les changements de compte/réseau
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        console.log("Déconnecté");
        resetUI();
      } else {
        account = accounts[0];
        updateWalletUI();
        loadData();
      }
    });
    
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });

  } catch (error) {
    showError(error.message);
    console.error("Erreur de connexion:", error);
  }
}

async function loadData() {
  if (!account) return;
  
  try {
    // Solde TAAMS
    const balance = await taamsContract.methods.balanceOf(account).call();
    document.getElementById('tokenBalance').textContent = web3.utils.fromWei(balance, 'ether');
    
    // Données Staking
    const stake = await taamsContract.methods.stakes(account).call();
    const stakedAmount = web3.utils.fromWei(stake.amount, 'ether');
    document.getElementById('stakedAmount').textContent = stakedAmount;
    
    // Calculer récompenses
    const level = await taamsContract.methods.getLevel(account).call();
    const duration = (Date.now() / 1000 - stake.timestamp) / 86400; // jours
    const rewards = (duration * stake.amount * (100 + level * 5)) / (100 * 1e18 * 100);
    document.getElementById('rewards').textContent = rewards.toFixed(4);
    
    // Niveau
    document.getElementById('currentLevel').textContent = level;
    document.getElementById('levelProgress').style.width = `${(level/10)*100}%`;
    
    // Charger les badges
    loadBadges();
    
  } catch (error) {
    showError("Erreur de chargement des données");
    console.error("Erreur loadData:", error);
  }
}

async function loadBadges() {
  try {
    const balance = await badgeContract.methods.balanceOf(account).call();
    const container = document.getElementById('badgesContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < balance; i++) {
      const tokenId = await badgeContract.methods.tokenOfOwnerByIndex(account, i).call();
      const uri = await badgeContract.methods.tokenURI(tokenId).call();
      
      container.innerHTML += `
        <div class="text-center m-2">
          <img src="${uri}" class="badge-img" alt="Badge">
          <div>Niveau ${i+1}</div>
        </div>
      `;
    }
  } catch (error) {
    console.error("Erreur loadBadges:", error);
  }
}

async function stakeTokens() {
  const amount = document.getElementById('stakeInput').value;
  if (!amount || amount <= 0) {
    showError("Montant invalide", "stakeError");
    return;
  }

  try {
    await taamsContract.methods.stake(web3.utils.toWei(amount, 'ether'))
      .send({ from: account });
    loadData();
  } catch (error) {
    showError("Échec du staking: " + error.message);
  }
}

async function claimRewards() {
  try {
    await taamsContract.methods.claimRewards().send({ from: account });
    loadData();
  } catch (error) {
    showError("Échec du claim: " + error.message);
  }
}

async function unstakeTokens() {
  try {
    await taamsContract.methods.unstake().send({ from: account });
    loadData();
  } catch (error) {
    showError("Échec de l'unstake: " + error.message);
  }
}

// Helper functions
function updateWalletUI() {
  const btn = document.getElementById('walletBtn');
  btn.textContent = `${account.slice(0, 6)}...${account.slice(-4)}`;
  btn.classList.add('connected');
}

function resetUI() {
  document.getElementById('walletBtn').textContent = 'Connecter Wallet';
  document.getElementById('walletBtn').classList.remove('connected');
  document.getElementById('tokenBalance').textContent = '0';
  document.getElementById('stakedAmount').textContent = '0';
  document.getElementById('rewards').textContent = '0';
  document.getElementById('badgesContainer').innerHTML = '';
}

function showError(message, elementId = 'errorAlert') {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.classList.remove('d-none');
  setTimeout(() => element.classList.add('d-none'), 5000);
}

// Vérifier le réseau
async function checkNetwork() {
  const chainId = await web3.eth.getChainId();
  if (chainId !== NETWORK_CONFIG.chainId) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${NETWORK_CONFIG.chainId.toString(16)}` }],
      });
    } catch (error) {
      showError(`Veuillez vous connecter au réseau ${NETWORK_CONFIG.chainName}`);
    }
  }
}