// contracts.js
const CONTRACTS = {
  TAAMS: {
    address: '0x123...', // À remplacer
    abi: [
      // Fonctions ERC20 standards
      "function balanceOf(address) view returns (uint)",
      "function transfer(address, uint) returns (bool)",
      // Fonctions spécifiques TAAMS
      "function stake(uint amount) external",
      "function claimRewards() external",
      "function unstake() external",
      "function stakes(address) view returns (uint amount, uint timestamp)",
      "function getLevel(address) view returns (uint)",
      // Events
      "event Staked(address indexed user, uint amount)",
      "event RewardClaimed(address indexed user, uint amount)"
    ]
  },
  BADGE: {
    address: '0x456...', // À remplacer
    abi: [
      "function balanceOf(address) view returns (uint)",
      "function tokenOfOwnerByIndex(address, uint) view returns (uint)",
      "function tokenURI(uint) view returns (string)",
      "function badgeInfo(uint) view returns (uint level, uint timestamp)"
    ]
  }
};

// Dans app.js, remplacer CONFIG par:
// const CONFIG = CONTRACTS;