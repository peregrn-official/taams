// Nouvel état avec persistance
const state = {
  demoData: {
    balance: 10000,
    staked: 0,
    rewards: 0,
    lastStakeTime: 0,
    connected: false
  },
  
  // Système de persistance
  saveState() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('taams_demo_state', JSON.stringify(this.demoData));
    }
  },
  
  loadState() {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('taams_demo_state');
      if (saved) this.demoData = JSON.parse(saved);
    }
  }
};

// Gestion améliorée de la connexion
function initWallet() {
  const walletBtn = document.getElementById('walletBtn');
  const statusEl = document.getElementById('connectionStatus');
  const statusText = document.getElementById('statusText');

  walletBtn.addEventListener('click', async () => {
    if (state.demoData.connected) return;
    
    // Simulation réaliste de connexion
    statusEl.classList.remove('d-none');
    statusText.textContent = "Connexion au portefeuille...";
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    state.demoData.connected = true;
    state.saveState();
    
    statusText.textContent = "Connecté avec succès!";
    walletBtn.innerHTML = `<i class="fas fa-check-circle me-2"></i>0x7f...3a4b`;
    walletBtn.classList.add('connected');
    
    setTimeout(() => statusEl.classList.add('d-none'), 2000);
    updateUI();
  });
}

// Gestion du staking avec persistance
function setupStaking() {
  document.getElementById('stakeBtn').addEventListener('click', () => {
    if (!state.demoData.connected) {
      showAlert("Veuillez d'abord connecter un portefeuille", "warning");
      return;
    }
    
    const amount = parseFloat(document.getElementById('stakeInput').value) || 0;
    if (amount <= 0) return showAlert("Montant invalide", "danger");
    
    state.demoData.staked += amount;
    state.demoData.balance -= amount;
    state.demoData.lastStakeTime = Date.now();
    state.saveState();
    
    updateUI();
    showAlert(`${amount} TAAMS stakés avec succès!`, "success");
  });
  
  // ... (gestion similaire pour unstake)
}

// Rafraîchissement manuel
function setupRefresh() {
  document.getElementById('refreshBtn').addEventListener('click', () => {
    updateUI();
    showAlert("Données actualisées", "info");
  });
}

// Initialisation complète
document.addEventListener('DOMContentLoaded', () => {
  state.loadState();
  initWallet();
  setupStaking();
  setupRefresh();
  updateUI();
});