// Configuration des contrats
const CONTRACTS = {
  TAAMS: {
    address: '0x123...', // Remplacez par votre adresse réelle
    abi: [
      {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {"name": "_to", "type": "address"},
          {"name": "_value", "type": "uint256"}
        ],
        "name": "transfer",
        "outputs": [{"name": "success", "type": "bool"}],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [{"name": "amount", "type": "uint256"}],
        "name": "stake",
        "outputs": [],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "unstake",
        "outputs": [],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "claimRewards",
        "outputs": [],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [{"name": "", "type": "address"}],
        "name": "stakes",
        "outputs": [
          {"name": "amount", "type": "uint256"},
          {"name": "timestamp", "type": "uint256"}
        ],
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {"indexed": true, "name": "user", "type": "address"},
          {"indexed": false, "name": "amount", "type": "uint256"}
        ],
        "name": "Staked",
        "type": "event"
      }
    ]
  }
};

// Détection d'environnement
const ENV = {
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isMetaMaskInstalled: () => window.ethereum && window.ethereum.isMetaMask,
  getMetaMaskLink: () => {
    if (/Android/i.test(navigator.userAgent)) {
      return 'https://metamask.app.link/dapp/' + window.location.hostname;
    }
    return 'https://metamask.io/download.html';
  }
};

// Configuration réseau
const NETWORK_CONFIG = {
  chainId: 1, // Ethereum Mainnet
  chainName: "Ethereum Mainnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: ["https://mainnet.infura.io/v3/YOUR_INFURA_KEY"],
  blockExplorerUrls: ["https://etherscan.io"]
};

// Vérification du réseau
async function checkNetwork() {
  if (window.ethereum) {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== `0x${NETWORK_CONFIG.chainId.toString(16)}`) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${NETWORK_CONFIG.chainId.toString(16)}` }],
        });
      } catch (error) {
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [NETWORK_CONFIG],
            });
          } catch (addError) {
            console.error("Erreur d'ajout de réseau:", addError);
          }
        }
        console.error("Erreur de changement de réseau:", error);
      }
    }
  }
}