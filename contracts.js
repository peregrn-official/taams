const CONTRACTS = {
  TAAMS: {
    address: "0x0000000000000000000000000000000000000000",
    abi: [],
    mobileFallback: true
  }
};

// Détection des capacités mobiles
if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
  console.log("Mode mobile activé - Fonctionnalités adaptées");
  
  // Simulation améliorée pour mobile
  CONTRACTS.TAAMS.simulate = {
    connect: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            success: true,
            address: "0x7f...3a4b"
          });
        }, 1000);
      });
    }
  };
}