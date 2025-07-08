// Simulation des fonctions du contrat
console.log("Mode démo activé - Fonctionnalités simulées");

const CONTRACTS = {
  TAAMS: {
    address: "0x0000000000000000000000000000000000000000",
    abi: []
  }
};

// Export pour compatibilité
if (typeof module !== 'undefined') {
  module.exports = { CONTRACTS };
}