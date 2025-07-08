// Network Configuration
const NETWORK_CONFIG = {
  chainId: 1, // Ethereum Mainnet
  chainName: "Ethereum Mainnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: ["https://mainnet.infura.io/v3/YOUR_INFURA_KEY"],
  blockExplorerUrls: ["https://etherscan.io"],
  iconUrls: ["https://etherscan.io/favicon.ico"]
};

// TAAMS Contract
const CONTRACTS = {
  TAAMS: {
    address: '0x123...', // Replace with actual contract address
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

// Environment Detection
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

// Contract Events
const CONTRACT_EVENTS = {
  TAAMS: {
    Staked: {
      name: 'Staked',
      handler: (event) => {
        console.log('Staking event:', event);
        // Update UI when staking event is detected
        if (event.returnValues.user.toLowerCase() === state.account.toLowerCase()) {
          loadData();
        }
      }
    }
  }
};

// Initialize Contract Events
function initContractEvents() {
  if (state.contract) {
    state.contract.events.Staked()
      .on('data', CONTRACT_EVENTS.TAAMS.Staked.handler)
      .on('error', console.error);
  }
}