const CONTRACTS = {
  TAAMS: {
    address: '0x123...', // Remplacez par votre adresse
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
        "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
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

const NETWORK_CONFIG = {
  chainId: 1, // Ethereum Mainnet
  chainName: "Ethereum Mainnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: ["https://mainnet.infura.io/v3/YOUR_KEY"],
  blockExplorerUrls: ["https://etherscan.io"]
};