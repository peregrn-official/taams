// Configuration
const CONFIG = {
  DEMO_MODE: true,
  BADGE_LEVELS: [
    { name: "Nouveau", icon: "fa-seedling", color: "#9e9e9e", threshold: 0 },
    { name: "Bronze", icon: "fa-award", color: "#cd7f32", threshold: 500 },
    { name: "Argent", icon: "fa-medal", color: "#c0c0c0", threshold: 1000 },
    { name: "Or", icon: "fa-trophy", color: "#ffd700", threshold: 2000 },
    { name: "Platine", icon: "fa-gem", color: "#e5e4e2", threshold: 5000 },
    { name: "Diamant", icon: "fa-crown", color: "#b9f2ff", threshold: 10000 }
  ]
};

// État de démo
const state = {
  demoData: {
    balance: 2500,
    staked: 0,
    rewards: 0,
    lastStakeTime: 0
  },
  game: {
    score: 0
  }
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  initWallet();
  initDemo();
  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';
  }, 1500);
});

// Simulation wallet
function initWallet() {
  const walletBtn = document.getElementById('walletBtn');
  
  walletBtn.addEventListener('click', () => {
    walletBtn.innerHTML = `<i class="fas fa-check-circle me-2"></i>0x7f...3a4b (Démo)`;
    walletBtn.classList.add('connected');
    
    // Simulation de connexion réussie
    updateUI();
  });
}

// Initialisation démo
function initDemo() {
  // Boutons de démo
  document.getElementById('stakeBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('stakeInput').value) || 500;
    if (amount > state.demoData.balance) {
      alert("Solde insuffisant en démo");
      return;
    }
    
    state.demoData.staked += amount;
    state.demoData.balance -= amount;
    state.demoData.lastStakeTime = Date.now();
    updateUI();
  });
  
  document.getElementById('unstakeBtn').addEventListener('click', () => {
    state.demoData.balance += state.demoData.staked;
    state.demoData.staked = 0;
    updateUI();
  });
  
  document.getElementById('claimBtn').addEventListener('click', () => {
    state.demoData.balance += state.demoData.rewards;
    state.demoData.rewards = 0;
    updateUI();
  });
  
  updateUI();
}

// Mise à jour UI
function updateUI() {
  // Calcul récompenses fictives
  if (state.demoData.staked > 0) {
    const hoursStaked = ((Date.now() - state.demoData.lastStakeTime) / 3600000) || 1;
    state.demoData.rewards = Math.round(state.demoData.staked * 0.01 * hoursStaked);
  }
  
  // Mise à jour des valeurs
  document.getElementById('tokenBalance').textContent = state.demoData.balance.toFixed(2);
  document.getElementById('stakedAmount').textContent = state.demoData.staked.toFixed(2);
  document.getElementById('rewards').textContent = state.demoData.rewards.toFixed(4);
  
  // Mise à jour badges et niveaux
  updateBadges();
}

// Badges et niveaux
function updateBadges() {
  const currentStaked = state.demoData.staked;
  const container = document.getElementById('badgesContainer');
  container.innerHTML = '';
  
  // Trouver le niveau actuel
  let currentLevel = 0;
  for (let i = CONFIG.BADGE_LEVELS.length - 1; i >= 0; i--) {
    if (currentStaked >= CONFIG.BADGE_LEVELS[i].threshold) {
      currentLevel = i;
      break;
    }
  }
  
  // Mettre à jour le niveau
  document.getElementById('currentLevel').textContent = CONFIG.BADGE_LEVELS[currentLevel].name;
  
  // Calcul progression
  const nextLevel = currentLevel < CONFIG.BADGE_LEVELS.length - 1 
    ? CONFIG.BADGE_LEVELS[currentLevel + 1].threshold 
    : CONFIG.BADGE_LEVELS[currentLevel].threshold;
  
  const progress = Math.min(100, 
    ((currentStaked - CONFIG.BADGE_LEVELS[currentLevel].threshold) / 
    (nextLevel - CONFIG.BADGE_LEVELS[currentLevel].threshold)) * 100
  );
  
  document.getElementById('levelProgress').style.width = `${progress}%`;
  
  // Générer les badges
  CONFIG.BADGE_LEVELS.forEach((badge, index) => {
    const active = currentStaked >= badge.threshold;
    const badgeEl = document.createElement('div');
    badgeEl.className = `badge-card ${active ? 'active' : ''}`;
    badgeEl.innerHTML = `
      <div class="badge-icon" style="color: ${badge.color}">
        <i class="fas ${badge.icon}"></i>
      </div>
      <h5>${badge.name}</h5>
      <small>${badge.threshold}+ TAAMS</small>
    `;
    container.appendChild(badgeEl);
  });
}