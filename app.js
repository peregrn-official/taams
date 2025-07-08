// Configuration démo
const CONFIG = {
  DEMO_MODE: true,
  BADGE_LEVELS: [
    { name: "Nouveau", icon: "fa-seedling", color: "#9e9e9e", threshold: 0 },
    { name: "Bronze", icon: "fa-award", color: "#cd7f32", threshold: 500 },
    { name: "Argent", icon: "fa-medal", color: "#c0c0c0", threshold: 1000 }
  ]
};

// État de démo
const state = {
  demoData: {
    balance: 1000,
    staked: 0,
    rewards: 0
  }
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  initWallet();
  loadDemoData();
  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';
  }, 1500);
});

// Simulation wallet
function initWallet() {
  document.getElementById('walletBtn').addEventListener('click', () => {
    if (state.demoData.staked === 0) {
      state.demoData.staked = 600;
      state.demoData.balance = 400;
    } else {
      state.demoData.staked = 0;
      state.demoData.balance = 1000;
    }
    loadDemoData();
  });
}

// Chargement des données de démo
function loadDemoData() {
  // Mise à jour des valeurs
  document.getElementById('tokenBalance').textContent = state.demoData.balance;
  document.getElementById('stakedAmount').textContent = state.demoData.staked;
  
  // Calcul récompenses fictives
  state.demoData.rewards = Math.round(state.demoData.staked * 0.01);
  document.getElementById('rewards').textContent = state.demoData.rewards;
  
  // Mise à jour badges
  updateBadges();
  
  // Mise à jour bouton
  const btn = document.getElementById('walletBtn');
  if (state.demoData.staked > 0) {
    btn.innerHTML = `<i class="fas fa-check-circle me-2"></i>Connecté (Démo)`;
    btn.classList.add('connected');
  } else {
    btn.innerHTML = `<i class="fas fa-wallet me-2"></i>Connecter Wallet`;
    btn.classList.remove('connected');
  }
}

// Badges de démo
function updateBadges() {
  const container = document.getElementById('badgesContainer');
  container.innerHTML = '';
  
  CONFIG.BADGE_LEVELS.forEach(badge => {
    const active = state.demoData.staked >= badge.threshold;
    const card = document.createElement('div');
    card.className = `badge-card ${active ? 'active' : ''}`;
    card.style = `border-color: ${badge.color}`;
    card.innerHTML = `
      <div class="badge-icon" style="color: ${badge.color}">
        <i class="fas ${badge.icon}"></i>
      </div>
      <h5>${badge.name}</h5>
      <small>${badge.threshold}+ TAAMS</small>
    `;
    container.appendChild(card);
  });
}