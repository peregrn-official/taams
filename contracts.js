// contracts.js
const CONTRACTS = {
  TAAMS: {
    address: '0x123...', // À remplacer par votre adresse de contrat
    abi: [
      // Fonctions ERC20 standards
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
      
      // Fonctions spécifiques TAAMS
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
        "name": "claimRewards",
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
        "constant": true,
        "inputs": [{"name": "user", "type": "address"}],
        "name": "getLevel",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
      }
    ]
  },
  BADGE: {
    address: '0x456...', // À remplacer par votre adresse de contrat
    abi: [
      {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {"name": "_owner", "type": "address"},
          {"name": "_index", "type": "uint256"}
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [{"name": "_tokenId", "type": "uint256"}],
        "name": "tokenURI",
        "outputs": [{"name": "", "type": "string"}],
        "type": "function"
      }
    ]
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
  rpcUrls: ["https://mainnet.infura.io/v3/"],
  blockExplorerUrls: ["https://etherscan.io"]
};