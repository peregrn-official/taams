// Configuration des contrats
const CONTRACTS = {
  TAAMS: {
    address: '0x123...', // Remplacez par votre adresse
    abi: [
      // Fonction balanceOf
      {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
      },
      // Fonction transfer
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
      // Fonction stake
      {
        "constant": false,
        "inputs": [{"name": "amount", "type": "uint256"}],
        "name": "stake",
        "outputs": [],
        "type": "function"
      },
      // Fonction unstake
      {
        "constant": false,
        "inputs": [],
        "name": "unstake",
        "outputs": [],
        "type": "function"
      },
      // Fonction claimRewards
      {
        "constant": false,
        "inputs": [],
        "name": "claimRewards",
        "outputs": [],
        "type": "function"
      },
      // Fonction stakes
      {
        "constant": true,
        "inputs": [{"name": "", "type": "address"}],
        "name": "stakes",
        "outputs": [
          {"name": "amount", "type": "uint256"},
          {"name": "timestamp", "type": "uint256"}
        ],
        "type": "function"
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