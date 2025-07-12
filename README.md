# TAAMS Smart Contract
TAAMS is a gamified DeFi protocol built on Polygon, combining staking, token burn dynamics, and NFT utilities. Designed for decentralization and community governance, TAAMS integrates a reward wheel, BL2P tokens, and on-chain proposals for evolving the protocol.

![Polygon](https://img.shields.io/badge/Blockchain-Polygon-blueviolet)
![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

TAAMS is an ERC-20 smart contract deployed on the Polygon network, designed to provide a decentralized, community-driven token ecosystem. It includes features like token burning, staking, a gamified reward system, and governance, aimed at fostering user engagement and protocol flexibility.

**Note**: This is a public repository for the TAAMS contract. Sensitive project details are not disclosed to protect the core vision. For more information, contact the project maintainers.

## Features

- **ERC-20 Token**: Standard token with 18 decimals and a fixed maximum supply.
- **Burn Mechanism**: Allows users to burn tokens to reduce circulating supply.
- **Staking**: Users can stake tokens to earn rewards over time.
- **Reward Wheel**: A gamified feature allowing eligible users to spin for token or NFT rewards.
- **Governance**: Decentralized decision-making through voting by token holders.
- **Locked Reserve**: A portion of tokens is locked, manageable via governance.
- **Advertisement System**: Supports community-approved promotional messages.
- **Referral Program**: Incentivizes user growth through referrals.
- **DeFi/NFT Integration**: Extensible for integration with DeFi protocols and NFT contracts.

## Prerequisites

- **Node.js**: v16 or higher for testing and deployment tools.
- **MetaMask**: Configured for Polygon Mainnet or Amoy Testnet.
- **Polygon MATIC**: For gas fees (Mainnet or Amoy faucet).
- **Remix IDE**: For deploying and interacting with the contract.
- **Solidity**: Version ^0.8.20.
- **OpenZeppelin Contracts**: Used for ERC-20 and ReentrancyGuard.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/taams.git
   cd taams
   ```

2. **Install Dependencies** (for testing):
   ```bash
   npm install hardhat ethers @openzeppelin/contracts
   ```

3. **Configure Environment**:
   Create a `.env` file in the root directory:
   ```
   PRIVATE_KEY=your_metamask_private_key
   POLYGON_RPC_URL=https://rpc-amoy.polygon.technology  # or https://polygon-rpc.com for Mainnet
   CONTRACT_ADDRESS=0xYourDeployedContractAddress
   ```

## Deployment

### Deploy on Polygon Amoy (Testnet)

1. **Set Up MetaMask**:
   - Network: Polygon Amoy
   - RPC URL: `https://rpc-amoy.polygon.technology`
   - Chain ID: `80002`
   - Currency: MATIC
   - Faucet: [https://faucet.polygon.technology](https://faucet.polygon.technology)

2. **Deploy with Remix**:
   - Open [Remix IDE](https://remix.ethereum.org).
   - Import `TAAMS.sol` from the repository.
   - Compile with Solidity `0.8.20`.
   - Select **Injected Provider - MetaMask** in the "Environment" dropdown.
   - Deploy the contract (gas cost: ~0.05 MATIC on Amoy).
   - Copy the deployed contract address.

3. **Verify on Polygonscan**:
   - Go to [Amoy Polygonscan](https://amoy.polygonscan.com).
   - Submit the contract code for verification (use flattened source code if needed).

### Deploy on Polygon Mainnet

- Follow the same steps, but use:
  - RPC URL: `https://polygon-rpc.com`
  - Chain ID: `137`
  - Ensure sufficient MATIC for gas (~0.1-0.5 MATIC).
- **Warning**: Audit the contract before Mainnet deployment (e.g., via OpenZeppelin).

## Usage

### Interacting with the Contract

Use Remix, Hardhat, or ethers.js to interact with the deployed contract. Key functions include:

- **checkActivation()**: Triggers the burn phase when conditions are met.
- **participateInBurn(uint256 amount)**: Burns tokens to contribute to the burn target.
- **stake(uint256 amount)**: Stakes tokens to earn rewards.
- **unstake()**: Withdraws staked tokens and claims rewards.
- **spinWheel()**: Spins the reward wheel for eligible users.
- **submitProposal(...)**: Submits a governance proposal (requires sufficient voting power).
- **vote(uint256 proposalId, bool support)**: Votes on a governance proposal.
- **executeProposal(uint256 proposalId)**: Executes an approved proposal.

### Example: Staking Tokens

```javascript
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(process.env.POLYGON_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, wallet);

async function stakeTokens(amount) {
  const tx = await contract.stake(ethers.utils.parseEther(amount.toString()));
  await tx.wait();
  console.log(`Staked ${amount} TAAMS`);
}

stakeTokens(1000); // Stake 1000 TAAMS
```

## Testing

### Local Testing with Hardhat

1. **Set Up Hardhat**:
   ```bash
   npx hardhat init
   ```
   Copy `TAAMS.sol` to the `contracts/` folder.

2. **Write Tests**:
   Create a test file (e.g., `test/TAAMS.js`):
   ```javascript
   const { expect } = require('chai');
   const { ethers } = require('hardhat');

   describe('TAAMS', function () {
     let taams, owner, user;

     beforeEach(async () => {
       [owner, user] = await ethers.getSigners();
       const TAAMS = await ethers.getContractFactory('TAAMS');
       taams = await TAAMS.deploy();
       await taams.deployed();
     });

     it('should deploy with correct initial supply', async () => {
       const totalSupply = await taams.totalSupply();
       expect(totalSupply).to.equal(ethers.utils.parseEther('10000000000'));
     });

     it('should allow staking', async () => {
       await taams.connect(user).stake(ethers.utils.parseEther('1000'));
       const stakeInfo = await taams.getStakingInfo(user.address);
       expect(stakeInfo.amount).to.equal(ethers.utils.parseEther('1000'));
     });
   });
   ```

3. **Run Tests**:
   ```bash
   npx hardhat test
   ```

### Test on Amoy

- Deploy on Amoy and interact via Remix.
- Test key functions: `checkActivation`, `participateInBurn`, `stake`, `spinWheel`, `submitProposal`.
- Use a faucet to get MATIC for gas.

## Security

- **Auditing**: Recommended to audit with OpenZeppelin or Trail of Bits before Mainnet deployment.
- **ReentrancyGuard**: Used to prevent reentrancy attacks.
- **Governance Cooldown**: Limits proposal spam.
- **Emergency Pause**: Allows halting critical functions if needed.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries, join our community on [Discord](https://discord.gg/your-invite) or [Telegram](https://t.me/your-group).

---

**Disclaimer**: This contract is provided as-is. Always conduct thorough testing and auditing before deploying to a production environment.
