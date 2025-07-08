// Configuration
const CONFIG = {
  TAAMS_ADDRESS: '0x123...', // À remplacer
  BADGE_ADDRESS: '0x456...', // À remplacer
  TAAMS_ABI: [...], // ABI complet du contrat TAAMS
  BADGE_ABI: [...]  // ABI complet du contrat Badge
};

// Variables globales
let web3, taamsContract, badgeContract, account;

// Initialisation
window.addEventListener('DOMContentLoaded', async () => {
  // Connexion Wallet
  document.getElementById('walletBtn').addEventListener('click', connectWallet);
  
  // Boutons Staking
  document.getElementById('stakeBtn').addEventListener('click', stakeTokens);
  document.getElementById('claimBtn').addEventListener('click', claimRewards);
  document.getElementById('unstakeBtn').addEventListener('click', unstakeTokens);
});

async function connectWallet() {
  if (window.ethereum) {
    try {
      web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      account = (await web3.eth.getAccounts())[0];
      
      // Initialiser les contrats
      taamsContract = new web3.eth.Contract(CONFIG.TAAMS_ABI, CONFIG.TAAMS_ADDRESS);
      badgeContract = new web3.eth.Contract(CONFIG.BADGE_ABI, CONFIG.BADGE_ADDRESS);
      
      document.getElementById('walletBtn').textContent = account.slice(0, 6) + '...' + account.slice(-4);
      document.getElementById('walletBtn').classList.add('success');
      
      // Charger les données
      loadData();
      setInterval(loadData, 15000); // Rafraîchir toutes les 15s
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('Veuillez installer MetaMask!');
  }
}

async function loadData() {
  if (!account) return;
  
  // Solde TAAMS
  const balance = await taamsContract.methods.balanceOf(account).call();
  document.getElementById('tokenBalance').textContent = web3.utils.fromWei(balance, 'ether');
  
  // Données Staking
  const stake = await taamsContract.methods.stakes(account).call();
  const stakedAmount = web3.utils.fromWei(stake.amount, 'ether');
  document.getElementById('stakedAmount').textContent = stakedAmount;
  
  // Calculer récompenses
  const level = await taamsContract.methods.getLevel(account).call();
  const duration = (Date.now() / 1000 - stake.timestamp) / 86400;
  const rewards = (duration * stake.amount * (100 + level * 5)) / (100 * 1e18 * 100);
  document.getElementById('rewards').textContent = rewards.toFixed(4);
  
  // Niveau
  document.getElementById('currentLevel').textContent = level;
  document.getElementById('levelProgress').style.width = `${(level/10)*100}%`;
  
  // Charger les badges
  loadBadges();
}

async function loadBadges() {
  const balance = await badgeContract.methods.balanceOf(account).call();
  const container = document.getElementById('badgesContainer');
  container.innerHTML = '';
  
  for (let i = 0; i < balance; i++) {
    const tokenId = await badgeContract.methods.tokenOfOwnerByIndex(account, i).call();
    const level = await badgeContract.methods.badgeInfo(tokenId).call();
    const uri = await badgeContract.methods.tokenURI(tokenId).call();
    
    container.innerHTML += `
      <div class="m-2 text-center">
        <img src="${uri}" class="badge-img" alt="Badge Niveau ${level}">
        <div>Niveau ${level}</div>
      </div>
    `;
  }
}

// Fonctions Staking
async function stakeTokens() {
  const amount = document.getElementById('stakeInput').value;
  if (!amount || amount <= 0) return;
  
  await taamsContract.methods.stake(web3.utils.toWei(amount, 'ether'))
    .send({ from: account });
  loadData();
}

async function claimRewards() {
  await taamsContract.methods.claimRewards().send({ from: account });
  loadData();
}

async function unstakeTokens() {
  await taamsContract.methods.unstake().send({ from: account });
  loadData();
}