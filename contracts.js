// Simulation de contrat pour démo
const CONTRACTS = {
  TAAMS: {
    address: "0x0000000000000000000000000000000000000000",
    abi: []
  }
};

// Fonction de démo pour la console
console.log("Mode démo activé - Toutes les fonctions sont simulées");

// Export pour compatibilité
if (typeof module !== 'undefined') {
  module.exports = { CONTRACTS };
}