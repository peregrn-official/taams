// Configuration Premium
const CONFIG = {
  DEMO_MODE: true,
  LEVELS: [
    { name: "Nouveau", threshold: 0, bonus: 0, color: "#9e9e9e" },
    { name: "Bronze", threshold: 500, bonus: 5, color: "#cd7f32" },
    { name: "Argent", threshold: 1000, bonus: 10, color: "#c0c0c0" },
    { name: "Or", threshold: 2500, bonus: 15, color: "#ffd700" },
    { name: "Platine", threshold: 5000, bonus: 20, color: "#e5e4e2" },
    { name: "Diamant", threshold: 10000, bonus: 30, color: "#b9f2ff" },
    { name: "Elite", threshold: 25000, bonus: 40, color: "#ff00ff" },
    { name: "VIP", threshold: 50000, bonus: 50, color: "#00ffff" },
    { name: "Legend", threshold: 100000, bonus: 70, color: "#ff4500" },
    { name: "Whale", threshold: 250000, bonus: 100, color: "#8a2be2" }
  ],
  STAKE_OPTIONS: {
    30: { bonus: 5, label: "30 jours (+5%)" },
    90: { bonus: 15, label: "90 jours (+15%)" },
    180: { bonus: 30, label: "6 mois (+30%)" },
    365: { bonus: 60, label: "1 an (+60%)" }
  },
  BASE_RATE: 0.01 // 1% de base
};

// État de l'application
const state = {
  demoData: {
    balance: 10000,
    staked: 0,
    rewards: 0,
    stakeStart: 0,
    currentLevel: 0,
    hodlMonths: 0,
    selectedDuration: 30
  }
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  setupEventListeners();
});

function initUI() {
  // Initialiser les options de durée
  const durationSelect = document.getElementById('stakeDuration');
  durationSelect.innerHTML = '';
  Object.entries(CONFIG.STAKE_OPTIONS).forEach(([days, config]) => {
    const option = document.createElement('option');
    option.value = days;
    option.textContent = config.label;
    durationSelect.appendChild(option);
  });

  updateUI();
}

function setupEventListeners() {
  document.getElementById('stakeBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('stakeInput').value) || 0;
    const duration = parseInt(document.getElementById('stakeDuration').value);
    
    if (amount <= 0) return showAlert("Montant invalide", "danger");
    if (amount > state.demoData.balance) return showAlert("Solde insuffisant", "danger");
    
    state.demoData.staked += amount;
    state.demoData.balance -= amount;
    state.demoData.stakeStart = Date.now();
    state.demoData.selectedDuration = duration;
    
    updateUI();
    showAlert(`Staking réussi! ${amount} TAAMS pour ${duration} jours`, "success");
  });

  document.getElementById('unstakeBtn').addEventListener('click', () => {
    if (state.demoData.staked <= 0) return showAlert("Aucun montant staké", "warning");
    
    // Calculer les récompenses avec bonus
    const daysStaked = Math.floor((Date.now() - state.demoData.stakeStart) / (1000 * 60 * 60 * 24));
    const durationBonus = CONFIG.STAKE_OPTIONS[state.demoData.selectedDuration].bonus / 100;
    const hodlBonus = state.demoData.hodlMonths * 0.1;
    const levelBonus = CONFIG.LEVELS[state.demoData.currentLevel].bonus / 100;
    
    const totalRewards = state.demoData.staked * CONFIG.BASE_RATE * (daysStaked / 365) * 
                         (1 + durationBonus + hodlBonus + levelBonus);
    
    state.demoData.balance += state.demoData.staked + totalRewards;
    state.demoData.staked = 0;
    state.demoData.rewards = 0;
    
    updateUI();
    showAlert(`Retrait réussi! Récompenses: ${totalRewards.toFixed(2)} TAAMS`, "success");
  });
}

function updateUI() {
  // Mettre à jour les données de base
  document.getElementById('tokenBalance').textContent = state.demoData.balance.toFixed(2);
  document.getElementById('stakedAmount').textContent = state.demoData.staked.toFixed(2);
  
  // Calculer le niveau actuel
  state.demoData.currentLevel = calculateLevel(state.demoData.staked);
  const currentLevelConfig = CONFIG.LEVELS[state.demoData.currentLevel];
  const nextLevelConfig = CONFIG.LEVELS[Math.min(state.demoData.currentLevel + 1, CONFIG.LEVELS.length - 1)];
  
  // Mettre à jour la progression
  document.getElementById('currentLevel').textContent = 
    `Niveau ${state.demoData.currentLevel}: ${currentLevelConfig.name}`;
  
  const progress = nextLevelConfig ? 
    ((state.demoData.staked - currentLevelConfig.threshold) / 
     (nextLevelConfig.threshold - currentLevelConfig.threshold)) * 100 : 100;
  
  document.getElementById('levelProgress').style.width = `${progress}%`;
  document.getElementById('nextLevelReq').textContent = 
    nextLevelConfig ? `${nextLevelConfig.threshold} TAAMS pour niveau suivant` : "Niveau maximum atteint!";
  
  // Calculer le bonus HODL
  state.demoData.hodlMonths = Math.floor((Date.now() - state.demoData.stakeStart) / (1000 * 60 * 60 * 24 * 30));
  const hodlMultiplier = 1 + (state.demoData.hodlMonths * 0.1);
  document.getElementById('hodlMultiplier').textContent = `${hodlMultiplier.toFixed(1)}x`;
  
  // Mettre à jour les badges
  updateBadges();
}

function updateBadges() {
  const container = document.getElementById('badgesContainer');
  container.innerHTML = '';
  
  CONFIG.LEVELS.forEach((level, index) => {
    const isActive = state.demoData.staked >= level.threshold;
    const isCurrent = index === state.demoData.currentLevel;
    
    const badge = document.createElement('div');
    badge.className = `col-6`;
    badge.innerHTML = `
      <div class="vip-card p-2 text-center ${isActive ? (index > 5 ? 'badge-vip' : 'badge-elite') : ''} 
           ${isCurrent ? 'border-primary' : ''}" style="border-color: ${level.color}">
        <i class="fas ${getLevelIcon(index)} fa-2x mb-2" style="color: ${level.color}"></i>
        <h6>${level.name}</h6>
        <small class="text-muted">${level.threshold}+</small>
        ${isActive ? `<span class="badge bg-dark mt-1">+${level.bonus}%</span>` : ''}
      </div>
    `;
    container.appendChild(badge);
  });
}

// Helpers
function calculateLevel(stakedAmount) {
  for (let i = CONFIG.LEVELS.length - 1; i >= 0; i--) {
    if (stakedAmount >= CONFIG.LEVELS[i].threshold) {
      return i;
    }
  }
  return 0;
}

function getLevelIcon(level) {
  const icons = [
    'fa-seedling',
    'fa-award',
    'fa-medal',
    'fa-trophy',
    'fa-gem',
    'fa-crown',
    'fa-star',
    'fa-gem',
    'fa-fire',
    'fa-whale'
  ];
  return icons[level] || 'fa-certificate';
}

function showAlert(message, type) {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type} position-fixed bottom-0 end-0 m-3`;
  alert.textContent = message;
  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 3000);
}