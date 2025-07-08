// Simulation des fonctions du contrat pour la démo
console.log("Mode démo TAAMS Premium activé");

const CONTRACTS = {
  TAAMS: {
    address: "0x0000000000000000000000000000000000000000",
    abi: [],
    // Fonctions simulées
    simulate: {
      stake: (amount, duration) => {
        return { status: true, rewards: amount * 0.01 * duration };
      },
      getLevel: (staked) => {
        const levels = [0, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000];
        for (let i = levels.length - 1; i >= 0; i--) {
          if (staked >= levels[i]) return i;
        }
        return 0;
      }
    }
  }
};

// Export pour compatibilité
if (typeof module !== 'undefined') {
  module.exports = { CONTRACTS };
}