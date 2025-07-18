{
  "_format": "hh-sol-artifact-1",
  "contractName": "TAAMS",
  "sourceName": "contracts/TAAMS.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "adId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "AdvertisementPosted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "matured",
          "type": "bool"
        }
      ],
      "name": "BL2PMaturityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "BL2PRevealed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "BL2PRewardClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bl2pAmount",
          "type": "uint256"
        }
      ],
      "name": "BL2PStaked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "BL2PTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "users",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "rewards",
          "type": "uint256[]"
        }
      ],
      "name": "BatchBL2PRewardClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "BurnPhaseActivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "delegator",
          "type": "address"
        }
      ],
      "name": "DelegationRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newContract",
          "type": "address"
        }
      ],
      "name": "GovernanceContractUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "InactiveBL2PBurned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newValue",
          "type": "uint256"
        }
      ],
      "name": "LockedReserveUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "ProposalExecuted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "enum TAAMS.ProposalType",
          "name": "proposalType",
          "type": "uint8"
        }
      ],
      "name": "ProposalSubmitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newQuorum",
          "type": "uint256"
        }
      ],
      "name": "QuorumUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bonus",
          "type": "uint256"
        }
      ],
      "name": "ReferralBonusPaid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "remainingBalance",
          "type": "uint256"
        }
      ],
      "name": "ReserveUnlocked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "Staked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "StakingRewardClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "burner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalBurned",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "cycle",
          "type": "uint256"
        }
      ],
      "name": "TokensBurned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "Unstaked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "commitHash",
          "type": "bytes32"
        }
      ],
      "name": "VoteCommitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "delegator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "delegate",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "VoteDelegated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "support",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256"
        }
      ],
      "name": "VoteRevealed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newThreshold",
          "type": "uint256"
        }
      ],
      "name": "VoteThresholdUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "WheelSpun",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "ACTIVATION_THRESHOLD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ADVERTISEMENT_PERIOD_BLOCKS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ANNUAL_BURN_AMOUNT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "BL2P_MAX_SUPPLY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "BLOCKS_PER_YEAR",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "BURN_CYCLE_DURATION_BLOCKS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "BURN_TARGET",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EARLY_ADOPTER_BONUS_RATE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EARLY_ADOPTER_LIMIT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "LOCKED_RESERVE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_SUPPLY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_TOP_DELEGATES",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PROPOSAL_COOLDOWN_BLOCKS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PROPOSAL_THRESHOLD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "QUORUM",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "REFERRAL_BONUS_RATE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "STAKING_MIN_AMOUNT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "STAKING_PERIOD_BLOCKS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "STAKING_REWARD_RATE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "UNLOCK_PERIOD_BLOCKS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "VOTE_THRESHOLD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "VOTING_PERIOD_BLOCKS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "WHEEL_MAX_REWARD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "WHEEL_MIN_REWARD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "WHEEL_REPLENISH_RATE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "WHEEL_RESERVE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "WHEEL_SPIN_PERIOD_BLOCKS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "activeDelegations",
      "outputs": [
        {
          "internalType": "address",
          "name": "source",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "delegate",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "bl2pAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "delegationBlock",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "advertisementCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "advertisements",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "postedBlock",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "users",
          "type": "address[]"
        }
      ],
      "name": "batchClaimBL2PReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "bl2pClaimed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "bl2pLifespanBlocks",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "bl2pMeta",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "birthAndExpiry",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "matured",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "bl2pRevealed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "burnContributions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "burnDeadlineBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "burnInactiveBL2P",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "burnPhaseActive",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "checkActivation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimBL2PReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "commitHash",
          "type": "bytes32"
        }
      ],
      "name": "commitVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentBurnCycle",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "cycleBurnedTotal",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "delegate",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "delegateVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "delegatedBL2PReceived",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "earlyAdopterCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "emergencyPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "executeProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getBL2PLifetime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "birthBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expiryBlock",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentCycleBurned",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLastProposer",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getPotentialBL2PReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRemainingBurnable",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getRemainingValidBL2P",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getStakingInfo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "potentialReward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bl2pBoost",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTopDelegates",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getWheelSpinEligibility",
      "outputs": [
        {
          "internalType": "bool",
          "name": "eligible",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "nextSpinBlock",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "governanceContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "inactivityBurnRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastAdvertisementBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastBurnCycleStartBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lastProposalBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastUnlockBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lastVoteBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lastWheelSpinBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lockedReserveBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maturationPeriodBlocks",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxDelegatedBL2PPercent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "participateInBurn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proposalCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "proposals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "newValue",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        },
        {
          "internalType": "enum TAAMS.ProposalType",
          "name": "proposalType",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "executed",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "startBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "forVotes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "againstVotes",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "referrals",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "burnedAmount",
          "type": "uint256"
        }
      ],
      "name": "replenishWheel",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "support",
          "type": "bool"
        },
        {
          "internalType": "bytes32",
          "name": "secret",
          "type": "bytes32"
        }
      ],
      "name": "revealVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "revokeDelegation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newContract",
          "type": "address"
        }
      ],
      "name": "setGovernanceContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "spinWheel",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "stake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "stakes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startBlock",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "active",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "bl2pBoost",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "desc",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "newValue",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        },
        {
          "internalType": "enum TAAMS.ProposalType",
          "name": "proposalType",
          "type": "uint8"
        }
      ],
      "name": "submitProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "topDelegates",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalBurned",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "totalContributions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalStaked",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferBL2P",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unstake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "updateBL2PMaturity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "bl2pAmount",
          "type": "uint256"
        }
      ],
      "name": "useBL2PForStaking",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "users",
          "type": "address[]"
        }
      ],
      "name": "verifyBL2PIntegrity",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isValid",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "totalBL2P",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "wheelRewardReserve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523461049057610011610495565b610019610495565b81516001600160401b03811161039b57600354600181811c91168015610486575b602082101461037b57601f8111610421575b50602092601f82116001146103bc57928192936000926103b1575b50508160011b916000199060031b1c1916176003555b80516001600160401b03811161039b57600454600181811c91168015610391575b602082101461037b57601f8111610316575b50602091601f82116001146102b2579181926000926102a7575b50508160011b916000199060031b1c1916176004555b600160055562ffffff19600654166006556b033b2e3c9fd0803ce8000000600755600060085560006009556000600a556000600b556a52b7d2dcc80cd2e4000000600c556000600d5560006013556005601455600a6015556a084595161401484a0000006017556032601855612710601e55620186a0601f55600160205560146021553015610291576002546b033b2e3c9fd0803ce8000000810180911161027b57600255600030815280602052604081206b033b2e3c9fd0803ce800000081540190556040516b033b2e3c9fd0803ce80000008152816000805160206143cf83398151915260203093a33315610267576002546b1d14a0219e5482242800000081018091116102535760025533815280602052604081206b1d14a0219e548224280000008154019055604051906b1d14a0219e5482242800000082526000805160206143cf83398151915260203393a343601b556a084595161401484a000000601655604051613f0890816104c78239f35b634e487b7160e01b82526011600452602482fd5b63ec442f0560e01b81526004819052602490fd5b634e487b7160e01b600052601160045260246000fd5b63ec442f0560e01b600052600060045260246000fd5b0151905038806100ca565b601f198216926004600052806000209160005b8581106102fe575083600195106102e5575b505050811b016004556100e0565b015160001960f88460031b161c191690553880806102d7565b919260206001819286850151815501940192016102c5565b60046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c81019160208410610371575b601f0160051c01905b81811061036557506100b0565b60008155600101610358565b909150819061034f565b634e487b7160e01b600052602260045260246000fd5b90607f169061009e565b634e487b7160e01b600052604160045260246000fd5b015190503880610067565b601f198216936003600052806000209160005b86811061040957508360019596106103f0575b505050811b0160035561007d565b015160001960f88460031b161c191690553880806103e2565b919260206001819286850151815501940192016103cf565b60036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c8101916020841061047c575b601f0160051c01905b818110610470575061004c565b60008155600101610463565b909150819061045a565b90607f169061003a565b600080fd5b60408051919082016001600160401b0381118382101761039b5760405260058252645441414d5360d81b602083015256fe608080604052600436101561001357600080fd5b60003560e01c908162429bd11461331357508063013cf08b1461324257806303a302121461321657806306fdde031461316e578063095ea7b3146130bc5780630d61b51914612c745780630f1a290514612c565780631129753f14612be85780631247d4f714612bbc57806315ecef9214612a6157806316934fc414612a0057806318160ddd146129e2578063184d1b93146129c45780631e4091271461298a5780631f5eea9e14612950578063200957601461268157806323b872dd1461265257806327a489e31461249f57806327c830a9146124795780632def66201461228f5780632e80d9b614612271578063302a6528146122535780633037313314611ecd578063313ce56714611eb157806332cb6b0c14611e8a5780633426ea4614611e6f5780633667ca1b14611c8e578063413236f714611e515780634d99f29714611e345780635162f62614611e0e57806355d74d5a14611289578063565272e814610eff578063588dc79614611df05780635b05132614611dd257806368d26b4b14611db457806369a80fd614611d7a5780636a9b1fbf14611d5c5780636d0e437814611c8e5780636e351b5014611d1157806370a0823114611cd757806372677d3c14611cb157806372f721ac14611c93578063730201f014611c8e57806377d217ed14611c4c5780637bde5df8146119595780637d58aeb6146119155780637ed3deba146118db5780637edbeae7146118b85780637f09dc311461189557806380a7854914611877578063810baceb14611851578063817b1cd2146118335780638fe0340914610cf2578063926f73271461166c578063938d40e81461164e57806395d89b411461156d57806396adbf8c1461154a57806398779c6e1461152c5780639885b7e11461146057806399aa12bb146113f45780639bfdae5e146113d65780639ca423b3146113945780639cebda8b146113765780639da69180146112ac578063a0ef4d0e1461128e578063a29dfff314611289578063a4d3180514611186578063a694fc3a14611064578063a6c266031461103f578063a9059cbb1461100e578063aa4704f314610f04578063aba020ef14610eff578063b172b22214610ed6578063b24d79df14610eb8578063b2ceb6b414610e7e578063b4ac453614610e57578063b8fca4fc14610d74578063ba59931d14610d51578063bcea610e14610cf7578063c261e88a14610b36578063c383f77b14610cf2578063c54c4fb414610c5f578063c998c53f14610c17578063ca409d8114610b3b578063cc7ff34714610b36578063ccd82cd614610b19578063d37db1d214610629578063d390d86514610aee578063d89135cd14610ad0578063da35c66414610ab2578063dcfcf97414610a81578063dd62ed3e14610a30578063e016a04c146106ce578063e11cb63b146106b2578063ec5faab114610694578063f52d925d14610676578063f5f1e6b01461062e578063f81e611f14610629578063facc092f1461049e5763fbea5b3b1461046a57600080fd5b3461049957602036600319011261049957604061048d610488613349565b613b9b565b82519182526020820152f35b600080fd5b34610499576060366003190112610499576024356004358115158083036104995760ff60065460101c166104995781600052602560205260406000209060058201548015610499574310158061061b575b1561049957600982019060018060a01b0333166000528160205260ff604060002054166104995760ff600484015460a81c166104995760018060a01b033316600052600a830160205260406000205490604051602081019160f81b825260443560218201523360601b60418201526035815261056c6055826133e7565b519020036104995761057d336138ce565b6105863361397b565b8015610499573360009081526020929092526040909120805460ff191660011790557f96b7e5dbd1a0bb4b34731d1dfce6ea83eab3fadbf4710c77ad43106f771f90fb9161060191908515610606576007016105e3828254613640565b90555b60408051951515865260208601919091523394918291820190565b0390a3005b600801610614828254613640565b90556105e6565b5060068201544311156104ef565b613622565b346104995760403660031901126104995761064761335f565b600435600052600e60205260406000209060018060a01b03166000526020526020604060002054604051908152f35b346104995760003660031901126104995760206040516201fa408152f35b34610499576000366003190112610499576020601554604051908152f35b3461049957600036600319011261049957602060405160058152f35b346104995760803660031901126104995760043567ffffffffffffffff8111610499573660238201121561049957806004013567ffffffffffffffff81116109f15760405191610728601f8301601f1916602001846133e7565b8183523660248383010111610499578160009260246020930183860137830101526044356001600160a01b0381169190602435908390036104995760643592600d8410156104995760ff60065460101c166104995769152d02c7e14af68000006107913361397b565b10610499573360005260236020526040600020546213c680810180911161090d574310610499576000600385148015610a23575b15610a0757835115610499575b6107dd601a54613799565b601a81905560008181526025602052604090209081556001810180546001600160a01b031916331790558451909390600285019067ffffffffffffffff81116109f15761082a8254613375565b601f81116109a9575b50806020601f821160011461094457600091610939575b508160011b916000199060031b1c19161790555b60038401556004830180546001600160a01b031916909217825561092357805460ff60a01b191660a085901b60ff60a01b16179055436005820181905562049d4081019190821061090d577f64147b1d4b260ddd199f9e9a7c1d4e444605245a354c18a74fdcc8e9004da33e9160068201553360005260236020524360406000205554916109056108fa604051926040845260408401906134ad565b9460208301906134ee565b8033940390a3005b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b90508701518961084a565b60008481528181209250601f198416905b8a8282106109915750509083600194939210610978575b5050811b01905561085e565b89015160001960f88460031b161c19169055898061096c565b60018495602093958493015181550194019201610955565b826000526020600020601f830160051c810191602084106109e7575b601f0160051c01905b8181106109db5750610833565b600081556001016109ce565b90915081906109c5565b634e487b7160e01b600052604160045260246000fd5b8215801590610a1a575b6107d257600080fd5b50811515610a11565b50506000600685146107c5565b3461049957604036600319011261049957610a49613349565b610a5161335f565b6001600160a01b039182166000908152600160209081526040808320949093168252928352819020549051908152f35b3461049957610a98610a92366134fb565b90613ae0565b6040805192151583526020830191909152819081015b0390f35b34610499576000366003190112610499576020601a54604051908152f35b34610499576000366003190112610499576020600854604051908152f35b34610499576020366003190112610499576020610b11610b0c613349565b613a84565b604051908152f35b346104995760003660031901126104995760208054604051908152f35b613606565b3461049957602036600319011261049957600435610b57613be2565b60ff60065460101c1661049957610b6d3361397b565b156104995733600052602a60205260ff600260406000200154161561049957610b953361397b565b811161049957801561049957610baa336138ce565b610bc0610bb633613b9b565b50601e5490613640565b43106104995733600052602a6020526003604060002001610be2828254613640565b90556040519081527f4a35c8fde6484aca5e3c4fd515e9314ca9f4a57266cdef7622cac399f20ac32a60203392a26001600555005b34610499576020366003190112610499576001600160a01b03610c38613349565b16600052602660205260408060002060ff6001825492015416825191825215156020820152f35b3461049957602036600319011261049957610c78613349565b610c818161397b565b15159081610cc3575b6001600160a01b031660009081526022602052604090205462049d4081019190821061090d576040805191151582526020820192909252f35b905060018060a01b038116600052602260205260406000205462049d40810180911161090d5743101590610c8a565b6135e2565b34610499576020366003190112610499576004356000526024602052604060002080546002610d2860018401613409565b920154610d4760405193849384526060602085015260608401906134ad565b9060408301520390f35b34610499576020366003190112610499576020610b11610d6f613349565b61397b565b3461049957604036600319011261049957610d8d613349565b602435610d98613be2565b60ff60065460101c1661049957610dae3361397b565b15610499576001600160a01b0382169182151580610e4d575b156104995781151580610e3b575b1561049957610de3336138ce565b33600052602660205260ff60016040600020015416156104995781610e0791613963565b506040519081527f1e50cdf36b7821a0ea2c0889b9a5426558cffa8eb685d3f224bb788faae557b160203392a36001600555005b50610e453361397b565b821115610dd5565b5033831415610dc7565b346104995760003660031901126104995760206040516b06765c793fa10079d00000008152f35b34610499576020366003190112610499576001600160a01b03610e9f613349565b1660005260226020526020604060002054604051908152f35b34610499576000366003190112610499576020600954604051908152f35b3461049957600036600319011261049957601d546040516001600160a01b039091168152602090f35b613593565b34610499576020366003190112610499576080610f1f613349565b60018060a01b038116600052602a602052604060002060405191610f42836133cb565b81549283815260018301549060208101828152600360ff600287015416151595866040850152015494606083019486865281610ffc575b5015610ff057606491610fa36213c680610f97610fa8945143613660565b0491516014549061364d565b61364d565b04915180610fca575b505b604051938452602084015260408301526060820152f35b91678ac7230489e80000610fe2610fe993948361364d565b0490613640565b9085610fb1565b50509050600090610fb3565b611006915061397b565b151588610f79565b3461049957604036600319011261049957602061103561102c613349565b60243590613963565b6040519015158152f35b3461049957600036600319011261049957602060405169152d02c7e14af68000008152f35b3461049957602036600319011261049957600435611080613be2565b60ff60065460101c166104995733320361049957683635c9adc5dea0000081106104995733600052600060205280604060002054106104995733600052602a60205260ff60026040600020015416610499576110dd81303361366d565b506040516110ea816133cb565b81815260036020820143815261113a604084016001815260608501926000845233600052602a602052604060002095518655516001860155511515600285019060ff801983541691151516179055565b5191015561114a81601354613640565b6013556040519081524360208201527f1449c6dd7851abc30abf37f57715f492010519147cc2652fbc38202c18a6ee9060403392a26001600555005b346104995760003660031901126104995761119f613be2565b60ff60065460101c16610499576111b53361397b565b1561049957336000908152602860205260409020600101546001600160a01b0316156104995733600090815260286020908152604080832060018101546002909101546001600160a01b0390911680855260299093529220805461125c9361121c91613660565b9055336000526028602052611247604060002060036000918281558260018201558260028201550155565b80600052602960205260406000205490613c9b565b337f6b2e7b08f80aedc85dfabf602e4cd41ccf8a9caa2961dd13719c71c3ff65bbc7600080a26001600555005b613575565b34610499576000366003190112610499576020601854604051908152f35b34610499576040366003190112610499576004356024359060ff60065460101c16610499578060005260256020526040600020600581015480156104995743101580611368575b156104995733600090815260098201602052604090205460ff166104995760ff600482015460a81c1661049957600a9060018060a01b03331660005201602052816040600020556040519182527f1f4e2aa7825ef02e85293e2de66cfbcb326af2632b558996e546bb1ef3e8764d60203393a3005b5060068101544311156112f3565b34610499576000366003190112610499576020601654604051908152f35b34610499576020366003190112610499576001600160a01b036113b5613349565b166000526012602052602060018060a01b0360406000205416604051908152f35b34610499576000366003190112610499576020600d54604051908152f35b34610499576020366003190112610499576001600160a01b03611415613349565b1660005260286020526080604060002060018060a01b038154169060018060a01b03600182015416906003600282015491015491604051938452602084015260408301526060820152f35b3461049957600036600319011261049957604051806020602b5492838152018092602b6000527f11c44e4875b74d31ff9fd779bf2566af7bd15b87fc985d01f5094b89e3669e4f9060005b81811061150d57505050816114c19103826133e7565b6040519182916020830190602084525180915260408301919060005b8181106114eb575050500390f35b82516001600160a01b03168452859450602093840193909201916001016114dd565b82546001600160a01b03168452602090930192600192830192016114ab565b34610499576000366003190112610499576020601954604051908152f35b3461049957600036600319011261049957602060ff600654166040519015158152f35b3461049957600036600319011261049957604051600060045461158f81613375565b808452906001811690811561162a57506001146115cb575b610aae836115b7818503826133e7565b6040519182916020835260208301906134ad565b600460009081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210611610575090915081016020016115b76115a7565b9192600181602092548385880101520191019092916115f8565b60ff191660208086019190915291151560051b840190910191506115b790506115a7565b34610499576000366003190112610499576020600c54604051908152f35b3461049957604036600319011261049957611685613349565b602435611690613be2565b60ff60065460101c16610499576116a63361397b565b15610499576001600160a01b038216913383146104995782156104995781151580611821575b15610499576116da336138ce565b33600052602660205260ff600160406000200154161561049957336000908152602860205260409020600101546001600160a01b031661049957606461172b6117228361397b565b6021549061364d565b0483600052602960205261174483604060002054613640565b11610499576117ee90604051611759816133cb565b33808252602080830187815260408085018881524360608701908152600095865260288552828620965187546001600160a01b03199081166001600160a01b039283161789559451600189018054909616911617909355516002860155905160039490940193909355868252602990522080546117d7908590613640565b905583600052602960205260406000205490613c9b565b6040519081527ff5c2b450c3b6c4c3cc8c45e612ffa5ce51cda974e8b2ecaf58abda86d896584760203392a36001600555005b5061182b3361397b565b8211156116cc565b34610499576000366003190112610499576020601354604051908152f35b346104995760003660031901126104995760206040516a084595161401484a0000008152f35b34610499576000366003190112610499576020601c54604051908152f35b34610499576020366003190112610499576118b66118b1613349565b6138ce565b005b34610499576000366003190112610499576020604051678ac7230489e800008152f35b34610499576020366003190112610499576001600160a01b036118fc613349565b1660005260116020526020604060002054604051908152f35b3461049957600036600319011261049957601a546000908152602560209081526040909120600101546001600160a01b03166040516001600160a01b039091168152f35b3461049957602036600319011261049957600435611975613be2565b60065460ff8160101c166104995760ff161561049957801561049957336000526000602052806040600020541061049957600954431180611c36575b611c0c575b600954431161049957600c5481600854676765c793fa10079d601b1b6119dc8483613640565b11611be1575b676765c793fa10079d601b1b916119f891613640565b1161049957600a54600052600f602052611a1782604060002054613640565b1161049957611a253361397b565b60009015611bca57506005810281810460050361090d57676765c793fa10079d601b1b916064611ade9204905b611a5c8133613c04565b611a6881600854613640565b600855600a54600052600f6020526040600020611a86828254613640565b9055600a54600052600e602052604060002060018060a01b0333166000526020526040600020611ab7828254613640565b90553360005260116020526040600020611ad2828254613640565b905581611b7e57613640565b60085490600a5460405191825282602083015260408201527f19783b34589160c168487dc7f9c51ae0bcefe67a47d6708fba90f6ce0366d3d160603392a2101580611b6e575b611b30575b6001600555005b61010061ff001960065416176006557f487f0d08255b66d07fa5d32380f37fc9845759c2c886edb198e5a083cc8dfb4a6020604051438152a1611b29565b5060ff60065460081c1615611b24565b611b8a82600854613640565b600855600a54600052600f6020526040600020611ba8838254613640565b90553360005260116020526040600020611bc3838254613640565b9055613640565b676765c793fa10079d601b1b91611ade9190611a52565b91505080676765c793fa10079d601b1b03676765c793fa10079d601b1b811161090d579082906119e2565b600a546001810180911161090d57600a5543600b5562f099c0430180431161090d576009556119b6565b50676765c793fa10079d601b1b600854106119b1565b3461049957602036600319011261049957600435602b5481101561049957611c756020916135b1565b905460405160039290921b1c6001600160a01b03168152f35b61354f565b34610499576000366003190112610499576020601e54604051908152f35b3461049957600036600319011261049957602060ff60065460081c166040519015158152f35b34610499576020366003190112610499576001600160a01b03611cf8613349565b1660005260006020526020604060002054604051908152f35b346104995760203660031901126104995760ff60065460101c1661049957611d576064611d4260155460043561364d565b04611d4e81303361366d565b50601654613640565b601655005b34610499576000366003190112610499576020600754604051908152f35b34610499576020366003190112610499576001600160a01b03611d9b613349565b1660005260236020526020604060002054604051908152f35b34610499576000366003190112610499576020601b54604051908152f35b34610499576000366003190112610499576020600b54604051908152f35b34610499576000366003190112610499576020604051624f1a008152f35b346104995760003660031901126104995760ff60065460101c16610499576118b661384c565b346104995760003660031901126104995760206040516103e88152f35b34610499576000366003190112610499576020602154604051908152f35b34610499576000366003190112610499576020610b116137a8565b346104995760003660031901126104995760206040516b204fce5e3e250261100000008152f35b3461049957600036600319011261049957602060405160128152f35b3461049957611edb366134fb565b611ee3613be2565b60ff60065460101c16610499576032811161049957611f0181613749565b91611f0f60405193846133e7565b818352611f1b82613749565b602084019390601f190136853760005b838110611fde575060405192806040850160408652526060840192906000905b808210611fb45750505060209083830382850152519182815201929060005b818110611f9e577f6d0c10e0399ef884a3729fe88266e321a043ae7f4d6d12afb75539720cfab71b84860385a16001600555005b8251855260209485019490920191600101611f6a565b90919384359060018060a01b03821680920361049957602081600193829352019501920190611f4b565b6001600160a01b03611ff9611ff4838787613761565b613771565b1660005260106020526040600020541580612226575b61201c575b600101611f2b565b6001600160a01b03612032611ff4838787613761565b166000526011602052604060002054676765c793fa10079d601b1b810290808204676765c793fa10079d601b1b149015171561090d57676765c793fa10079d601b1b90046120808284613785565b52600d546103e881106121d4575b506001600160a01b036120a5611ff4838787613761565b166000908152601260205260409020546001600160a01b031661211d575b806120d060019284613785565b51828060a01b036120e5611ff4848989613761565b166000526010602052604060002055612116612105611ff4838888613761565b61210f8386613785565b5190613dc5565b9050612014565b6121278183613785565b519060058202918083046005149015171561090d57600191606490046001600160a01b03612159611ff4848989613761565b16600052601260205261217881848060a01b0360406000205416613dc5565b828060a01b0361218c611ff4848989613761565b1660005260126020527f050bae3eeefac62a4ee36c766f4f426f09edf96ae8fb3034ebbf961e4acc78e26020848060a01b036040600020541692604051908152a290506120c3565b6121de8284613785565b5190600a820291808304600a149015171561090d5761220d606461221d93046122078587613785565b51613640565b6122178486613785565b52613799565b600d558561208e565b506001600160a01b0361223d611ff4838787613761565b166000526011602052604060002054151561200f565b34610499576000366003190112610499576020600a54604051908152f35b34610499576000366003190112610499576020601754604051908152f35b34610499576000366003190112610499576122a8613be2565b60ff60065460101c16610499573332036104995733600052602a60205260ff60026040600020015416156104995733600052602a6020526040600020604051906122f1826133cb565b80548252606461233d6213c68061232e600360018601549586602089015260ff600282015416151560408901520154946060870195865243613660565b04610fa385516014549061364d565b0490518061245c575b50612352825133613963565b506123608251601354613660565b6013558015158061244b575b61240e575b5060405161237e816133cb565b60008152600360208201600081526123d0604084016000815260608501926000845233600052602a602052604060002095518655516001860155511515600285019060ff801983541691151516179055565b51910155516040519081524360208201527f7fc4727e062e336010f2c282598ef5f14facb3de68cf8195c2f23e1454b2b74e60403392a26001600555005b6124188133613963565b506040519081527f6dd401e61ba732582a5eba3d54ccc3afb3609cd3ac1a166d1d36f75fc0aedcda60203392a281612371565b506124553361397b565b151561236c565b90678ac7230489e80000610fe2612473938361364d565b82612346565b3461049957600036600319011261049957602060ff60065460101c166040519015158152f35b34610499576000366003190112610499576124b8613be2565b60065460ff8160101c166104995760081c60ff16156104995733600052601060205260406000205461049957336000526011602052604060002054801561049957676765c793fa10079d601b1b8102908104676765c793fa10079d601b1b0361090d57676765c793fa10079d601b1b9004600d546103e8811061261f575b50336000908152601260205260409020546001600160a01b03166125a2575b3360005260106020528060406000205561256f8133613dc5565b6040519081527fb60ccdad08a990849494cadc2278b346a8742fb757e67c422f71e3e64fb77b4560203392a26001600555005b600581028181046005148215171561090d57606490043360005260126020526125d88160018060a01b0360406000205416613dc5565b3360005260126020527f050bae3eeefac62a4ee36c766f4f426f09edf96ae8fb3034ebbf961e4acc78e2602060018060a01b036040600020541692604051908152a2612555565b90600a8102818104600a148215171561090d57612649916064612643920490613640565b91613799565b600d5581612536565b34610499576060366003190112610499576020611035612670613349565b61267861335f565b6044359161366d565b346104995760203660031901126104995761269a613349565b6126a2613be2565b60ff60065460101c16610499576126b88161397b565b15610499576001600160a01b03811690338214801561292a575b15610499578160005260266020526001600160801b0360406000206040516126f9816133af565b602060ff600184549485855201541615159101521643109081158092612906575b15610499576127288161397b565b918360005260106020526040600020548310612826575b61274a576001600555005b8161276a9184600052602660205260006001604082208281550155613c04565b6000828152602860205260409020600101546001600160a01b0316612790575b80611b29565b81600052602860205260018060a01b036001604060002001541660005260296020526127c26040600020918254613660565b90556000818152602860209081526040808320600101546001600160a01b03168084526029909252909120546127f791613c9b565b600052602860205261281f604060002060036000918281558260018201558260028201550155565b808061278a565b83600052601060205261283e83604060002054613660565b6128488184613c04565b847fe24abf0a1d8bdc06e382a8fc7157cd6c08495c024ceb329ec6c98f6c795fc26c6020604051848152a26000858152602860205260409020600101546001600160a01b0316612899575b5061273f565b84600052602860205260018060a01b036001604060002001541660005260296020526128cb6040600020918254613660565b90556000848152602860209081526040808320600101546001600160a01b031680845260299092529091205461290091613c9b565b84612893565b508260005260276020526040600020546103e8810180911161090d5743101561271a565b50601a546000908152602560205260409020600101546001600160a01b031633146126d2565b34610499576020366003190112610499576001600160a01b03612971613349565b1660005260276020526020604060002054604051908152f35b34610499576020366003190112610499576001600160a01b036129ab613349565b1660005260296020526020604060002054604051908152f35b34610499576000366003190112610499576020601f54604051908152f35b34610499576000366003190112610499576020600254604051908152f35b34610499576020366003190112610499576001600160a01b03612a21613349565b16600052602a60205260806040600020805490600181015490600360ff600283015416910154916040519384526020840152151560408301526060820152f35b3461049957600036600319011261049957612a7a613be2565b60ff60065460101c1661049957612a903361397b565b156104995733320361049957612aa53361397b565b156104995733600052602260205260406000205462049d40810180911161090d57431061049957601654678ac7230489e80000811061049957612ae73361397b565b600019430143811161090d576835ab028ac154b80001916040519060208201924083524360408301523360601b6060830152607482015260748152612b2d6094826133e7565b51902006678ac7230489e80000019081678ac7230489e800001161090d57808211612bb4575b81612b5d91613660565b601655612b6a8133613963565b50336000526022602052436040600020556040519081524360208201527f7e80d90613c5d641774903c5336059ae138dbf904ee2ec673bf74179bec98fb360403392a26001600555005b905080612b53565b3461049957602036600319011261049957600435600052600f6020526020604060002054604051908152f35b34610499576020366003190112610499576001600160a01b03612c09613349565b168015610499576020817fe3cf2b71b55b62fc1a6c7b2f6ff944c1b70048908cff22f2e08d1144e7ca7edb926bffffffffffffffffffffffff60a01b601d541617601d55604051908152a1005b34610499576000366003190112610499576020601454604051908152f35b3461049957602036600319011261049957600435612c90613be2565b60ff60065460101c166104995780600052602560205260406000206005810154156104995760068101544311156104995760048101805460ff8160a81c16610499576007830154612ce5600885015482613640565b9060175482106104995760648102908082046064149015171561090d5781156130a6570460185410156104995760ff60a81b1916600160a81b1780825560a01c60ff16600d8110156109235760048103612ec35750601954624f1a00810180911161090d5743106104995760038201908154906007548211610499577fe49db96a72e85d04778bb78627173221c08f5acaa50eaef5b0d94c0a8c1589b16040600394612d9f60ff9560018060a01b0360018a015416613963565b50436019555460075482519182526020820152a15b5460a01c169101549060018060a01b03601d541633148015612eba575b1561049957600d8110156109235760038103612e3457505060065462ff000060ff8260101c161560101b169062ff00001916176006555b7f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f600080a26001600555005b600081612e45575050600c55612e08565b5060018103612e575750601455612e08565b600060028203612e6b575050601555612e08565b5060078103612e7d5750601e55612e08565b600060088203612e91575050601f55612e08565b5060098103612ea35750602055612e08565b600c14612eb1575b50612e08565b60215581612eab565b50303314612dd1565b600060058203612f0857505060ff6003917f9ed927e3681de11fbc3fc5547d178d8a2655c3aaafd6d8704edc6ee7e70b8389602084860154604051908152a15b612db4565b506006810361301c5750815460405160208152600284018054600091612f2d82613375565b91826020860152600181169081600014612fd75750600114612f7e575b5050917f56e668e6eab92a31285f3c1809ce67652b2348579b6c5349bad3f2e9c00399a1826003959360ff950390a2612db4565b6000908152602081209092505b818310612fc057505081016040017f56e668e6eab92a31285f3c1809ce67652b2348579b6c5349bad3f2e9c00399a182612f4a565b805460408486010152602090920191600101612f8b565b60ff191660408087019190915292151560051b850190920192507f56e668e6eab92a31285f3c1809ce67652b2348579b6c5349bad3f2e9c00399a19150839050612f4a565b60039160ff91600090600a81036130665750507ff18f88786aae85a652aadb99a82462616489a33370c9bcc7b245906812ef7cd160208486015480601755604051908152a1612db4565b600b915003612f03577fc4f218f6e084beba806111ae2727cb7afb13d7647aef44c4d90b5f3c9cbe59c760208486015480601855604051908152a1612db4565b634e487b7160e01b600052601260045260246000fd5b34610499576040366003190112610499576130d5613349565b602435903315613158576001600160a01b031690811561314257336000526001602052604060002082600052602052806040600020556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b634a1406b160e11b600052600060045260246000fd5b63e602df0560e01b600052600060045260246000fd5b3461049957600036600319011261049957604051600060035461319081613375565b808452906001811690811561162a57506001146131b757610aae836115b7818503826133e7565b600360009081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b8082106131fc575090915081016020016115b76115a7565b9192600181602092548385880101520191019092916131e4565b3461049957600036600319011261049957600a54600052600f6020526020604060002054604051908152f35b34610499576020366003190112610499576004356000908152602560205260409020805460018201546001600160a01b03169161328160028201613409565b6003820154916004810154600582015460ff6006840154926132c760086007870154960154966040519a8b9a8b5260208b015261016060408b01526101608a01906134ad565b96606089015260018060a01b03811660808901526132ed60a08901838360a01c166134ee565b60a81c16151560c087015260e08601526101008501526101208401526101408301520390f35b34610499576020366003190112610499576020906001600160a01b03613337613349565b16600052601082526040600020548152f35b600435906001600160a01b038216820361049957565b602435906001600160a01b038216820361049957565b90600182811c921680156133a5575b602083101461338f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691613384565b6040810190811067ffffffffffffffff8211176109f157604052565b6080810190811067ffffffffffffffff8211176109f157604052565b90601f8019910116810190811067ffffffffffffffff8211176109f157604052565b906040519182600082549261341d84613375565b808452936001811690811561348b5750600114613444575b50613442925003836133e7565b565b90506000929192526020600020906000915b81831061346f5750509060206134429282010138613435565b6020919350806001915483858901015201910190918492613456565b90506020925061344294915060ff191682840152151560051b82010138613435565b919082519283825260005b8481106134d9575050826000602080949584010152601f8019910116010190565b806020809284010151828286010152016134b8565b90600d8210156109235752565b9060206003198301126104995760043567ffffffffffffffff811161049957826023820112156104995780600401359267ffffffffffffffff84116104995760248460051b83010111610499576024019190565b34610499576000366003190112610499576020604051676765c793fa10079d601b1b8152f35b3461049957600036600319011261049957602060405162049d408152f35b346104995760003660031901126104995760206040516213c6808152f35b602b548110156135cc57602b60005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b34610499576000366003190112610499576020604051683635c9adc5dea000008152f35b34610499576000366003190112610499576020604051600a8152f35b3461049957600036600319011261049957602060405162f099c08152f35b9190820180921161090d57565b8181029291811591840414171561090d57565b9190820391821161090d57565b919060ff60065460101c16610499576001600160a01b03831660009081526001602090815260408083203384529091529020549260001984106136df575b6136b59350613e39565b60ff60065416156136c557600190565b60ff60065460101c16610499576136da61384c565b600190565b82841061372c576001600160a01b038116938415613158573315613142576136b5946000526001602052604060002060018060a01b033316600052602052836040600020910390556136ab565b8284637dc7a0d960e11b6000523360045260245260445260646000fd5b67ffffffffffffffff81116109f15760051b60200190565b91908110156135cc5760051b0190565b356001600160a01b03811681036104995790565b80518210156135cc5760209160051b010190565b600019811461090d5760010190565b60ff60065416158015613835575b61383057600c54600854676765c793fa10079d601b1b6137d68383613640565b11613809575b50600a54600052600f60205260406000205481811015613802576137ff91613660565b90565b5050600090565b9050676765c793fa10079d601b1b03676765c793fa10079d601b1b811161090d57386137dc565b600090565b50676765c793fa10079d601b1b60085410156137b6565b60065460ff81166138cb576b06765c793fa10079d000000061388b61388260025460008052600060205260406000205490613660565b60075490613660565b10156138945750565b60019060ff1916176006557f60dc7136ae550f48cfeb4a0c4e69de31959531f869bd784a65dbc2c175f0b4a66020604051438152a1565b50565b6138d78161397b565b156138cb576001600160a01b03166000818152602660205260409020600181018054909160ff8216159081613948575b5061391157505050565b60019060ff19161790557f901c366748c1200897e79f66edad4e674060ebab48cb1aff438e4504e79ed67e602060405160018152a2565b61395a91505460801c601e5490613640565b43101538613907565b9060ff60065460101c16610499576136b59133613e39565b60ff60065460081c1615613a685760018060a01b03168060005260266020526001600160801b0360406000206040516139b3816133af565b602060ff60018454948585520154161515910152164310801590613a6e575b613a68578060005260276020526040600020544311600014613a5c578060005260276020526064613a2c613a0b60406000205443613660565b836000526010602052610fa36103e86040600020549204916020549061364d565b048160005260106020528060406000205411600014613802576137ff916000526010602052604060002054613660565b6064613a2c6000613a0b565b50600090565b50806000526010602052604060002054156139d2565b60ff60065460081c1615613a685760018060a01b03166000526011602052604060002054676765c793fa10079d601b1b810290808204676765c793fa10079d601b1b149015171561090d57676765c793fa10079d601b1b900490565b9060009160005b828110613af657505050600191565b613b11613b0a610d6f611ff4848787613761565b8095613640565b936001600160a01b03613b28611ff4848787613761565b16600052601060205260406000205415159081613b92575b5080613b5c575b613b5357600101613ae7565b50600093915050565b506001600160a01b03613b73611ff4838686613761565b1660005260266020526001600160801b03604060002054164310613b47565b90501538613b40565b60018060a01b03166000526026602052604060002090604051613bbd816133af565b602060ff600185549586855201541615159101526001600160801b038260801c921690565b600260055414613bf3576002600555565b633ee5aeb560e01b60005260046000fd5b6001600160a01b03168015613c8557600091818352826020526040832054818110613c6c57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef926020928587528684520360408620558060025403600255604051908152a3565b6064939263391434e360e21b8452600452602452604452fd5b634b637e8f60e11b600052600060045260246000fd5b60005b602b5480821015613d7f57613cb2826135b1565b905460039190911b1c6001600160a01b0390811690841614613cd75750600101613c9e565b9290915015613ce4575050565b600019820191821161090d57613d17613cff613d3b936135b1565b905460039190911b1c6001600160a01b0316916135b1565b81546001600160a01b0393841660039290921b91821b9390911b1916919091179055565b602b548015613d695760001901613d51816135b1565b81549060018060a01b039060031b1b19169055602b55565b634e487b7160e01b600052603160045260246000fd5b505090151580613db9575b613d915750565b602b5490680100000000000000008210156109f157613d178260016134429401602b556135b1565b50600a602b5410613d8a565b6001600160a01b0316908115613e2357613de181600254613640565b6002557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602060009284845283825260408420818154019055604051908152a3565b63ec442f0560e01b600052600060045260246000fd5b6001600160a01b0316908115613c85576001600160a01b0316918215613e23576000828152806020526040812054828110613eb85791604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815280845220818154019055604051908152a3565b916064928463391434e360e21b8452600452602452604452fdfea26469706673582212205d52a2214bdb0ec17ba043066887c907ac1d024ecf2a47fe923656f4fb0220d364736f6c634300081e0033ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
  "deployedBytecode": "0x608080604052600436101561001357600080fd5b60003560e01c908162429bd11461331357508063013cf08b1461324257806303a302121461321657806306fdde031461316e578063095ea7b3146130bc5780630d61b51914612c745780630f1a290514612c565780631129753f14612be85780631247d4f714612bbc57806315ecef9214612a6157806316934fc414612a0057806318160ddd146129e2578063184d1b93146129c45780631e4091271461298a5780631f5eea9e14612950578063200957601461268157806323b872dd1461265257806327a489e31461249f57806327c830a9146124795780632def66201461228f5780632e80d9b614612271578063302a6528146122535780633037313314611ecd578063313ce56714611eb157806332cb6b0c14611e8a5780633426ea4614611e6f5780633667ca1b14611c8e578063413236f714611e515780634d99f29714611e345780635162f62614611e0e57806355d74d5a14611289578063565272e814610eff578063588dc79614611df05780635b05132614611dd257806368d26b4b14611db457806369a80fd614611d7a5780636a9b1fbf14611d5c5780636d0e437814611c8e5780636e351b5014611d1157806370a0823114611cd757806372677d3c14611cb157806372f721ac14611c93578063730201f014611c8e57806377d217ed14611c4c5780637bde5df8146119595780637d58aeb6146119155780637ed3deba146118db5780637edbeae7146118b85780637f09dc311461189557806380a7854914611877578063810baceb14611851578063817b1cd2146118335780638fe0340914610cf2578063926f73271461166c578063938d40e81461164e57806395d89b411461156d57806396adbf8c1461154a57806398779c6e1461152c5780639885b7e11461146057806399aa12bb146113f45780639bfdae5e146113d65780639ca423b3146113945780639cebda8b146113765780639da69180146112ac578063a0ef4d0e1461128e578063a29dfff314611289578063a4d3180514611186578063a694fc3a14611064578063a6c266031461103f578063a9059cbb1461100e578063aa4704f314610f04578063aba020ef14610eff578063b172b22214610ed6578063b24d79df14610eb8578063b2ceb6b414610e7e578063b4ac453614610e57578063b8fca4fc14610d74578063ba59931d14610d51578063bcea610e14610cf7578063c261e88a14610b36578063c383f77b14610cf2578063c54c4fb414610c5f578063c998c53f14610c17578063ca409d8114610b3b578063cc7ff34714610b36578063ccd82cd614610b19578063d37db1d214610629578063d390d86514610aee578063d89135cd14610ad0578063da35c66414610ab2578063dcfcf97414610a81578063dd62ed3e14610a30578063e016a04c146106ce578063e11cb63b146106b2578063ec5faab114610694578063f52d925d14610676578063f5f1e6b01461062e578063f81e611f14610629578063facc092f1461049e5763fbea5b3b1461046a57600080fd5b3461049957602036600319011261049957604061048d610488613349565b613b9b565b82519182526020820152f35b600080fd5b34610499576060366003190112610499576024356004358115158083036104995760ff60065460101c166104995781600052602560205260406000209060058201548015610499574310158061061b575b1561049957600982019060018060a01b0333166000528160205260ff604060002054166104995760ff600484015460a81c166104995760018060a01b033316600052600a830160205260406000205490604051602081019160f81b825260443560218201523360601b60418201526035815261056c6055826133e7565b519020036104995761057d336138ce565b6105863361397b565b8015610499573360009081526020929092526040909120805460ff191660011790557f96b7e5dbd1a0bb4b34731d1dfce6ea83eab3fadbf4710c77ad43106f771f90fb9161060191908515610606576007016105e3828254613640565b90555b60408051951515865260208601919091523394918291820190565b0390a3005b600801610614828254613640565b90556105e6565b5060068201544311156104ef565b613622565b346104995760403660031901126104995761064761335f565b600435600052600e60205260406000209060018060a01b03166000526020526020604060002054604051908152f35b346104995760003660031901126104995760206040516201fa408152f35b34610499576000366003190112610499576020601554604051908152f35b3461049957600036600319011261049957602060405160058152f35b346104995760803660031901126104995760043567ffffffffffffffff8111610499573660238201121561049957806004013567ffffffffffffffff81116109f15760405191610728601f8301601f1916602001846133e7565b8183523660248383010111610499578160009260246020930183860137830101526044356001600160a01b0381169190602435908390036104995760643592600d8410156104995760ff60065460101c166104995769152d02c7e14af68000006107913361397b565b10610499573360005260236020526040600020546213c680810180911161090d574310610499576000600385148015610a23575b15610a0757835115610499575b6107dd601a54613799565b601a81905560008181526025602052604090209081556001810180546001600160a01b031916331790558451909390600285019067ffffffffffffffff81116109f15761082a8254613375565b601f81116109a9575b50806020601f821160011461094457600091610939575b508160011b916000199060031b1c19161790555b60038401556004830180546001600160a01b031916909217825561092357805460ff60a01b191660a085901b60ff60a01b16179055436005820181905562049d4081019190821061090d577f64147b1d4b260ddd199f9e9a7c1d4e444605245a354c18a74fdcc8e9004da33e9160068201553360005260236020524360406000205554916109056108fa604051926040845260408401906134ad565b9460208301906134ee565b8033940390a3005b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b90508701518961084a565b60008481528181209250601f198416905b8a8282106109915750509083600194939210610978575b5050811b01905561085e565b89015160001960f88460031b161c19169055898061096c565b60018495602093958493015181550194019201610955565b826000526020600020601f830160051c810191602084106109e7575b601f0160051c01905b8181106109db5750610833565b600081556001016109ce565b90915081906109c5565b634e487b7160e01b600052604160045260246000fd5b8215801590610a1a575b6107d257600080fd5b50811515610a11565b50506000600685146107c5565b3461049957604036600319011261049957610a49613349565b610a5161335f565b6001600160a01b039182166000908152600160209081526040808320949093168252928352819020549051908152f35b3461049957610a98610a92366134fb565b90613ae0565b6040805192151583526020830191909152819081015b0390f35b34610499576000366003190112610499576020601a54604051908152f35b34610499576000366003190112610499576020600854604051908152f35b34610499576020366003190112610499576020610b11610b0c613349565b613a84565b604051908152f35b346104995760003660031901126104995760208054604051908152f35b613606565b3461049957602036600319011261049957600435610b57613be2565b60ff60065460101c1661049957610b6d3361397b565b156104995733600052602a60205260ff600260406000200154161561049957610b953361397b565b811161049957801561049957610baa336138ce565b610bc0610bb633613b9b565b50601e5490613640565b43106104995733600052602a6020526003604060002001610be2828254613640565b90556040519081527f4a35c8fde6484aca5e3c4fd515e9314ca9f4a57266cdef7622cac399f20ac32a60203392a26001600555005b34610499576020366003190112610499576001600160a01b03610c38613349565b16600052602660205260408060002060ff6001825492015416825191825215156020820152f35b3461049957602036600319011261049957610c78613349565b610c818161397b565b15159081610cc3575b6001600160a01b031660009081526022602052604090205462049d4081019190821061090d576040805191151582526020820192909252f35b905060018060a01b038116600052602260205260406000205462049d40810180911161090d5743101590610c8a565b6135e2565b34610499576020366003190112610499576004356000526024602052604060002080546002610d2860018401613409565b920154610d4760405193849384526060602085015260608401906134ad565b9060408301520390f35b34610499576020366003190112610499576020610b11610d6f613349565b61397b565b3461049957604036600319011261049957610d8d613349565b602435610d98613be2565b60ff60065460101c1661049957610dae3361397b565b15610499576001600160a01b0382169182151580610e4d575b156104995781151580610e3b575b1561049957610de3336138ce565b33600052602660205260ff60016040600020015416156104995781610e0791613963565b506040519081527f1e50cdf36b7821a0ea2c0889b9a5426558cffa8eb685d3f224bb788faae557b160203392a36001600555005b50610e453361397b565b821115610dd5565b5033831415610dc7565b346104995760003660031901126104995760206040516b06765c793fa10079d00000008152f35b34610499576020366003190112610499576001600160a01b03610e9f613349565b1660005260226020526020604060002054604051908152f35b34610499576000366003190112610499576020600954604051908152f35b3461049957600036600319011261049957601d546040516001600160a01b039091168152602090f35b613593565b34610499576020366003190112610499576080610f1f613349565b60018060a01b038116600052602a602052604060002060405191610f42836133cb565b81549283815260018301549060208101828152600360ff600287015416151595866040850152015494606083019486865281610ffc575b5015610ff057606491610fa36213c680610f97610fa8945143613660565b0491516014549061364d565b61364d565b04915180610fca575b505b604051938452602084015260408301526060820152f35b91678ac7230489e80000610fe2610fe993948361364d565b0490613640565b9085610fb1565b50509050600090610fb3565b611006915061397b565b151588610f79565b3461049957604036600319011261049957602061103561102c613349565b60243590613963565b6040519015158152f35b3461049957600036600319011261049957602060405169152d02c7e14af68000008152f35b3461049957602036600319011261049957600435611080613be2565b60ff60065460101c166104995733320361049957683635c9adc5dea0000081106104995733600052600060205280604060002054106104995733600052602a60205260ff60026040600020015416610499576110dd81303361366d565b506040516110ea816133cb565b81815260036020820143815261113a604084016001815260608501926000845233600052602a602052604060002095518655516001860155511515600285019060ff801983541691151516179055565b5191015561114a81601354613640565b6013556040519081524360208201527f1449c6dd7851abc30abf37f57715f492010519147cc2652fbc38202c18a6ee9060403392a26001600555005b346104995760003660031901126104995761119f613be2565b60ff60065460101c16610499576111b53361397b565b1561049957336000908152602860205260409020600101546001600160a01b0316156104995733600090815260286020908152604080832060018101546002909101546001600160a01b0390911680855260299093529220805461125c9361121c91613660565b9055336000526028602052611247604060002060036000918281558260018201558260028201550155565b80600052602960205260406000205490613c9b565b337f6b2e7b08f80aedc85dfabf602e4cd41ccf8a9caa2961dd13719c71c3ff65bbc7600080a26001600555005b613575565b34610499576000366003190112610499576020601854604051908152f35b34610499576040366003190112610499576004356024359060ff60065460101c16610499578060005260256020526040600020600581015480156104995743101580611368575b156104995733600090815260098201602052604090205460ff166104995760ff600482015460a81c1661049957600a9060018060a01b03331660005201602052816040600020556040519182527f1f4e2aa7825ef02e85293e2de66cfbcb326af2632b558996e546bb1ef3e8764d60203393a3005b5060068101544311156112f3565b34610499576000366003190112610499576020601654604051908152f35b34610499576020366003190112610499576001600160a01b036113b5613349565b166000526012602052602060018060a01b0360406000205416604051908152f35b34610499576000366003190112610499576020600d54604051908152f35b34610499576020366003190112610499576001600160a01b03611415613349565b1660005260286020526080604060002060018060a01b038154169060018060a01b03600182015416906003600282015491015491604051938452602084015260408301526060820152f35b3461049957600036600319011261049957604051806020602b5492838152018092602b6000527f11c44e4875b74d31ff9fd779bf2566af7bd15b87fc985d01f5094b89e3669e4f9060005b81811061150d57505050816114c19103826133e7565b6040519182916020830190602084525180915260408301919060005b8181106114eb575050500390f35b82516001600160a01b03168452859450602093840193909201916001016114dd565b82546001600160a01b03168452602090930192600192830192016114ab565b34610499576000366003190112610499576020601954604051908152f35b3461049957600036600319011261049957602060ff600654166040519015158152f35b3461049957600036600319011261049957604051600060045461158f81613375565b808452906001811690811561162a57506001146115cb575b610aae836115b7818503826133e7565b6040519182916020835260208301906134ad565b600460009081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210611610575090915081016020016115b76115a7565b9192600181602092548385880101520191019092916115f8565b60ff191660208086019190915291151560051b840190910191506115b790506115a7565b34610499576000366003190112610499576020600c54604051908152f35b3461049957604036600319011261049957611685613349565b602435611690613be2565b60ff60065460101c16610499576116a63361397b565b15610499576001600160a01b038216913383146104995782156104995781151580611821575b15610499576116da336138ce565b33600052602660205260ff600160406000200154161561049957336000908152602860205260409020600101546001600160a01b031661049957606461172b6117228361397b565b6021549061364d565b0483600052602960205261174483604060002054613640565b11610499576117ee90604051611759816133cb565b33808252602080830187815260408085018881524360608701908152600095865260288552828620965187546001600160a01b03199081166001600160a01b039283161789559451600189018054909616911617909355516002860155905160039490940193909355868252602990522080546117d7908590613640565b905583600052602960205260406000205490613c9b565b6040519081527ff5c2b450c3b6c4c3cc8c45e612ffa5ce51cda974e8b2ecaf58abda86d896584760203392a36001600555005b5061182b3361397b565b8211156116cc565b34610499576000366003190112610499576020601354604051908152f35b346104995760003660031901126104995760206040516a084595161401484a0000008152f35b34610499576000366003190112610499576020601c54604051908152f35b34610499576020366003190112610499576118b66118b1613349565b6138ce565b005b34610499576000366003190112610499576020604051678ac7230489e800008152f35b34610499576020366003190112610499576001600160a01b036118fc613349565b1660005260116020526020604060002054604051908152f35b3461049957600036600319011261049957601a546000908152602560209081526040909120600101546001600160a01b03166040516001600160a01b039091168152f35b3461049957602036600319011261049957600435611975613be2565b60065460ff8160101c166104995760ff161561049957801561049957336000526000602052806040600020541061049957600954431180611c36575b611c0c575b600954431161049957600c5481600854676765c793fa10079d601b1b6119dc8483613640565b11611be1575b676765c793fa10079d601b1b916119f891613640565b1161049957600a54600052600f602052611a1782604060002054613640565b1161049957611a253361397b565b60009015611bca57506005810281810460050361090d57676765c793fa10079d601b1b916064611ade9204905b611a5c8133613c04565b611a6881600854613640565b600855600a54600052600f6020526040600020611a86828254613640565b9055600a54600052600e602052604060002060018060a01b0333166000526020526040600020611ab7828254613640565b90553360005260116020526040600020611ad2828254613640565b905581611b7e57613640565b60085490600a5460405191825282602083015260408201527f19783b34589160c168487dc7f9c51ae0bcefe67a47d6708fba90f6ce0366d3d160603392a2101580611b6e575b611b30575b6001600555005b61010061ff001960065416176006557f487f0d08255b66d07fa5d32380f37fc9845759c2c886edb198e5a083cc8dfb4a6020604051438152a1611b29565b5060ff60065460081c1615611b24565b611b8a82600854613640565b600855600a54600052600f6020526040600020611ba8838254613640565b90553360005260116020526040600020611bc3838254613640565b9055613640565b676765c793fa10079d601b1b91611ade9190611a52565b91505080676765c793fa10079d601b1b03676765c793fa10079d601b1b811161090d579082906119e2565b600a546001810180911161090d57600a5543600b5562f099c0430180431161090d576009556119b6565b50676765c793fa10079d601b1b600854106119b1565b3461049957602036600319011261049957600435602b5481101561049957611c756020916135b1565b905460405160039290921b1c6001600160a01b03168152f35b61354f565b34610499576000366003190112610499576020601e54604051908152f35b3461049957600036600319011261049957602060ff60065460081c166040519015158152f35b34610499576020366003190112610499576001600160a01b03611cf8613349565b1660005260006020526020604060002054604051908152f35b346104995760203660031901126104995760ff60065460101c1661049957611d576064611d4260155460043561364d565b04611d4e81303361366d565b50601654613640565b601655005b34610499576000366003190112610499576020600754604051908152f35b34610499576020366003190112610499576001600160a01b03611d9b613349565b1660005260236020526020604060002054604051908152f35b34610499576000366003190112610499576020601b54604051908152f35b34610499576000366003190112610499576020600b54604051908152f35b34610499576000366003190112610499576020604051624f1a008152f35b346104995760003660031901126104995760ff60065460101c16610499576118b661384c565b346104995760003660031901126104995760206040516103e88152f35b34610499576000366003190112610499576020602154604051908152f35b34610499576000366003190112610499576020610b116137a8565b346104995760003660031901126104995760206040516b204fce5e3e250261100000008152f35b3461049957600036600319011261049957602060405160128152f35b3461049957611edb366134fb565b611ee3613be2565b60ff60065460101c16610499576032811161049957611f0181613749565b91611f0f60405193846133e7565b818352611f1b82613749565b602084019390601f190136853760005b838110611fde575060405192806040850160408652526060840192906000905b808210611fb45750505060209083830382850152519182815201929060005b818110611f9e577f6d0c10e0399ef884a3729fe88266e321a043ae7f4d6d12afb75539720cfab71b84860385a16001600555005b8251855260209485019490920191600101611f6a565b90919384359060018060a01b03821680920361049957602081600193829352019501920190611f4b565b6001600160a01b03611ff9611ff4838787613761565b613771565b1660005260106020526040600020541580612226575b61201c575b600101611f2b565b6001600160a01b03612032611ff4838787613761565b166000526011602052604060002054676765c793fa10079d601b1b810290808204676765c793fa10079d601b1b149015171561090d57676765c793fa10079d601b1b90046120808284613785565b52600d546103e881106121d4575b506001600160a01b036120a5611ff4838787613761565b166000908152601260205260409020546001600160a01b031661211d575b806120d060019284613785565b51828060a01b036120e5611ff4848989613761565b166000526010602052604060002055612116612105611ff4838888613761565b61210f8386613785565b5190613dc5565b9050612014565b6121278183613785565b519060058202918083046005149015171561090d57600191606490046001600160a01b03612159611ff4848989613761565b16600052601260205261217881848060a01b0360406000205416613dc5565b828060a01b0361218c611ff4848989613761565b1660005260126020527f050bae3eeefac62a4ee36c766f4f426f09edf96ae8fb3034ebbf961e4acc78e26020848060a01b036040600020541692604051908152a290506120c3565b6121de8284613785565b5190600a820291808304600a149015171561090d5761220d606461221d93046122078587613785565b51613640565b6122178486613785565b52613799565b600d558561208e565b506001600160a01b0361223d611ff4838787613761565b166000526011602052604060002054151561200f565b34610499576000366003190112610499576020600a54604051908152f35b34610499576000366003190112610499576020601754604051908152f35b34610499576000366003190112610499576122a8613be2565b60ff60065460101c16610499573332036104995733600052602a60205260ff60026040600020015416156104995733600052602a6020526040600020604051906122f1826133cb565b80548252606461233d6213c68061232e600360018601549586602089015260ff600282015416151560408901520154946060870195865243613660565b04610fa385516014549061364d565b0490518061245c575b50612352825133613963565b506123608251601354613660565b6013558015158061244b575b61240e575b5060405161237e816133cb565b60008152600360208201600081526123d0604084016000815260608501926000845233600052602a602052604060002095518655516001860155511515600285019060ff801983541691151516179055565b51910155516040519081524360208201527f7fc4727e062e336010f2c282598ef5f14facb3de68cf8195c2f23e1454b2b74e60403392a26001600555005b6124188133613963565b506040519081527f6dd401e61ba732582a5eba3d54ccc3afb3609cd3ac1a166d1d36f75fc0aedcda60203392a281612371565b506124553361397b565b151561236c565b90678ac7230489e80000610fe2612473938361364d565b82612346565b3461049957600036600319011261049957602060ff60065460101c166040519015158152f35b34610499576000366003190112610499576124b8613be2565b60065460ff8160101c166104995760081c60ff16156104995733600052601060205260406000205461049957336000526011602052604060002054801561049957676765c793fa10079d601b1b8102908104676765c793fa10079d601b1b0361090d57676765c793fa10079d601b1b9004600d546103e8811061261f575b50336000908152601260205260409020546001600160a01b03166125a2575b3360005260106020528060406000205561256f8133613dc5565b6040519081527fb60ccdad08a990849494cadc2278b346a8742fb757e67c422f71e3e64fb77b4560203392a26001600555005b600581028181046005148215171561090d57606490043360005260126020526125d88160018060a01b0360406000205416613dc5565b3360005260126020527f050bae3eeefac62a4ee36c766f4f426f09edf96ae8fb3034ebbf961e4acc78e2602060018060a01b036040600020541692604051908152a2612555565b90600a8102818104600a148215171561090d57612649916064612643920490613640565b91613799565b600d5581612536565b34610499576060366003190112610499576020611035612670613349565b61267861335f565b6044359161366d565b346104995760203660031901126104995761269a613349565b6126a2613be2565b60ff60065460101c16610499576126b88161397b565b15610499576001600160a01b03811690338214801561292a575b15610499578160005260266020526001600160801b0360406000206040516126f9816133af565b602060ff600184549485855201541615159101521643109081158092612906575b15610499576127288161397b565b918360005260106020526040600020548310612826575b61274a576001600555005b8161276a9184600052602660205260006001604082208281550155613c04565b6000828152602860205260409020600101546001600160a01b0316612790575b80611b29565b81600052602860205260018060a01b036001604060002001541660005260296020526127c26040600020918254613660565b90556000818152602860209081526040808320600101546001600160a01b03168084526029909252909120546127f791613c9b565b600052602860205261281f604060002060036000918281558260018201558260028201550155565b808061278a565b83600052601060205261283e83604060002054613660565b6128488184613c04565b847fe24abf0a1d8bdc06e382a8fc7157cd6c08495c024ceb329ec6c98f6c795fc26c6020604051848152a26000858152602860205260409020600101546001600160a01b0316612899575b5061273f565b84600052602860205260018060a01b036001604060002001541660005260296020526128cb6040600020918254613660565b90556000848152602860209081526040808320600101546001600160a01b031680845260299092529091205461290091613c9b565b84612893565b508260005260276020526040600020546103e8810180911161090d5743101561271a565b50601a546000908152602560205260409020600101546001600160a01b031633146126d2565b34610499576020366003190112610499576001600160a01b03612971613349565b1660005260276020526020604060002054604051908152f35b34610499576020366003190112610499576001600160a01b036129ab613349565b1660005260296020526020604060002054604051908152f35b34610499576000366003190112610499576020601f54604051908152f35b34610499576000366003190112610499576020600254604051908152f35b34610499576020366003190112610499576001600160a01b03612a21613349565b16600052602a60205260806040600020805490600181015490600360ff600283015416910154916040519384526020840152151560408301526060820152f35b3461049957600036600319011261049957612a7a613be2565b60ff60065460101c1661049957612a903361397b565b156104995733320361049957612aa53361397b565b156104995733600052602260205260406000205462049d40810180911161090d57431061049957601654678ac7230489e80000811061049957612ae73361397b565b600019430143811161090d576835ab028ac154b80001916040519060208201924083524360408301523360601b6060830152607482015260748152612b2d6094826133e7565b51902006678ac7230489e80000019081678ac7230489e800001161090d57808211612bb4575b81612b5d91613660565b601655612b6a8133613963565b50336000526022602052436040600020556040519081524360208201527f7e80d90613c5d641774903c5336059ae138dbf904ee2ec673bf74179bec98fb360403392a26001600555005b905080612b53565b3461049957602036600319011261049957600435600052600f6020526020604060002054604051908152f35b34610499576020366003190112610499576001600160a01b03612c09613349565b168015610499576020817fe3cf2b71b55b62fc1a6c7b2f6ff944c1b70048908cff22f2e08d1144e7ca7edb926bffffffffffffffffffffffff60a01b601d541617601d55604051908152a1005b34610499576000366003190112610499576020601454604051908152f35b3461049957602036600319011261049957600435612c90613be2565b60ff60065460101c166104995780600052602560205260406000206005810154156104995760068101544311156104995760048101805460ff8160a81c16610499576007830154612ce5600885015482613640565b9060175482106104995760648102908082046064149015171561090d5781156130a6570460185410156104995760ff60a81b1916600160a81b1780825560a01c60ff16600d8110156109235760048103612ec35750601954624f1a00810180911161090d5743106104995760038201908154906007548211610499577fe49db96a72e85d04778bb78627173221c08f5acaa50eaef5b0d94c0a8c1589b16040600394612d9f60ff9560018060a01b0360018a015416613963565b50436019555460075482519182526020820152a15b5460a01c169101549060018060a01b03601d541633148015612eba575b1561049957600d8110156109235760038103612e3457505060065462ff000060ff8260101c161560101b169062ff00001916176006555b7f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f600080a26001600555005b600081612e45575050600c55612e08565b5060018103612e575750601455612e08565b600060028203612e6b575050601555612e08565b5060078103612e7d5750601e55612e08565b600060088203612e91575050601f55612e08565b5060098103612ea35750602055612e08565b600c14612eb1575b50612e08565b60215581612eab565b50303314612dd1565b600060058203612f0857505060ff6003917f9ed927e3681de11fbc3fc5547d178d8a2655c3aaafd6d8704edc6ee7e70b8389602084860154604051908152a15b612db4565b506006810361301c5750815460405160208152600284018054600091612f2d82613375565b91826020860152600181169081600014612fd75750600114612f7e575b5050917f56e668e6eab92a31285f3c1809ce67652b2348579b6c5349bad3f2e9c00399a1826003959360ff950390a2612db4565b6000908152602081209092505b818310612fc057505081016040017f56e668e6eab92a31285f3c1809ce67652b2348579b6c5349bad3f2e9c00399a182612f4a565b805460408486010152602090920191600101612f8b565b60ff191660408087019190915292151560051b850190920192507f56e668e6eab92a31285f3c1809ce67652b2348579b6c5349bad3f2e9c00399a19150839050612f4a565b60039160ff91600090600a81036130665750507ff18f88786aae85a652aadb99a82462616489a33370c9bcc7b245906812ef7cd160208486015480601755604051908152a1612db4565b600b915003612f03577fc4f218f6e084beba806111ae2727cb7afb13d7647aef44c4d90b5f3c9cbe59c760208486015480601855604051908152a1612db4565b634e487b7160e01b600052601260045260246000fd5b34610499576040366003190112610499576130d5613349565b602435903315613158576001600160a01b031690811561314257336000526001602052604060002082600052602052806040600020556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b634a1406b160e11b600052600060045260246000fd5b63e602df0560e01b600052600060045260246000fd5b3461049957600036600319011261049957604051600060035461319081613375565b808452906001811690811561162a57506001146131b757610aae836115b7818503826133e7565b600360009081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b8082106131fc575090915081016020016115b76115a7565b9192600181602092548385880101520191019092916131e4565b3461049957600036600319011261049957600a54600052600f6020526020604060002054604051908152f35b34610499576020366003190112610499576004356000908152602560205260409020805460018201546001600160a01b03169161328160028201613409565b6003820154916004810154600582015460ff6006840154926132c760086007870154960154966040519a8b9a8b5260208b015261016060408b01526101608a01906134ad565b96606089015260018060a01b03811660808901526132ed60a08901838360a01c166134ee565b60a81c16151560c087015260e08601526101008501526101208401526101408301520390f35b34610499576020366003190112610499576020906001600160a01b03613337613349565b16600052601082526040600020548152f35b600435906001600160a01b038216820361049957565b602435906001600160a01b038216820361049957565b90600182811c921680156133a5575b602083101461338f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691613384565b6040810190811067ffffffffffffffff8211176109f157604052565b6080810190811067ffffffffffffffff8211176109f157604052565b90601f8019910116810190811067ffffffffffffffff8211176109f157604052565b906040519182600082549261341d84613375565b808452936001811690811561348b5750600114613444575b50613442925003836133e7565b565b90506000929192526020600020906000915b81831061346f5750509060206134429282010138613435565b6020919350806001915483858901015201910190918492613456565b90506020925061344294915060ff191682840152151560051b82010138613435565b919082519283825260005b8481106134d9575050826000602080949584010152601f8019910116010190565b806020809284010151828286010152016134b8565b90600d8210156109235752565b9060206003198301126104995760043567ffffffffffffffff811161049957826023820112156104995780600401359267ffffffffffffffff84116104995760248460051b83010111610499576024019190565b34610499576000366003190112610499576020604051676765c793fa10079d601b1b8152f35b3461049957600036600319011261049957602060405162049d408152f35b346104995760003660031901126104995760206040516213c6808152f35b602b548110156135cc57602b60005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b34610499576000366003190112610499576020604051683635c9adc5dea000008152f35b34610499576000366003190112610499576020604051600a8152f35b3461049957600036600319011261049957602060405162f099c08152f35b9190820180921161090d57565b8181029291811591840414171561090d57565b9190820391821161090d57565b919060ff60065460101c16610499576001600160a01b03831660009081526001602090815260408083203384529091529020549260001984106136df575b6136b59350613e39565b60ff60065416156136c557600190565b60ff60065460101c16610499576136da61384c565b600190565b82841061372c576001600160a01b038116938415613158573315613142576136b5946000526001602052604060002060018060a01b033316600052602052836040600020910390556136ab565b8284637dc7a0d960e11b6000523360045260245260445260646000fd5b67ffffffffffffffff81116109f15760051b60200190565b91908110156135cc5760051b0190565b356001600160a01b03811681036104995790565b80518210156135cc5760209160051b010190565b600019811461090d5760010190565b60ff60065416158015613835575b61383057600c54600854676765c793fa10079d601b1b6137d68383613640565b11613809575b50600a54600052600f60205260406000205481811015613802576137ff91613660565b90565b5050600090565b9050676765c793fa10079d601b1b03676765c793fa10079d601b1b811161090d57386137dc565b600090565b50676765c793fa10079d601b1b60085410156137b6565b60065460ff81166138cb576b06765c793fa10079d000000061388b61388260025460008052600060205260406000205490613660565b60075490613660565b10156138945750565b60019060ff1916176006557f60dc7136ae550f48cfeb4a0c4e69de31959531f869bd784a65dbc2c175f0b4a66020604051438152a1565b50565b6138d78161397b565b156138cb576001600160a01b03166000818152602660205260409020600181018054909160ff8216159081613948575b5061391157505050565b60019060ff19161790557f901c366748c1200897e79f66edad4e674060ebab48cb1aff438e4504e79ed67e602060405160018152a2565b61395a91505460801c601e5490613640565b43101538613907565b9060ff60065460101c16610499576136b59133613e39565b60ff60065460081c1615613a685760018060a01b03168060005260266020526001600160801b0360406000206040516139b3816133af565b602060ff60018454948585520154161515910152164310801590613a6e575b613a68578060005260276020526040600020544311600014613a5c578060005260276020526064613a2c613a0b60406000205443613660565b836000526010602052610fa36103e86040600020549204916020549061364d565b048160005260106020528060406000205411600014613802576137ff916000526010602052604060002054613660565b6064613a2c6000613a0b565b50600090565b50806000526010602052604060002054156139d2565b60ff60065460081c1615613a685760018060a01b03166000526011602052604060002054676765c793fa10079d601b1b810290808204676765c793fa10079d601b1b149015171561090d57676765c793fa10079d601b1b900490565b9060009160005b828110613af657505050600191565b613b11613b0a610d6f611ff4848787613761565b8095613640565b936001600160a01b03613b28611ff4848787613761565b16600052601060205260406000205415159081613b92575b5080613b5c575b613b5357600101613ae7565b50600093915050565b506001600160a01b03613b73611ff4838686613761565b1660005260266020526001600160801b03604060002054164310613b47565b90501538613b40565b60018060a01b03166000526026602052604060002090604051613bbd816133af565b602060ff600185549586855201541615159101526001600160801b038260801c921690565b600260055414613bf3576002600555565b633ee5aeb560e01b60005260046000fd5b6001600160a01b03168015613c8557600091818352826020526040832054818110613c6c57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef926020928587528684520360408620558060025403600255604051908152a3565b6064939263391434e360e21b8452600452602452604452fd5b634b637e8f60e11b600052600060045260246000fd5b60005b602b5480821015613d7f57613cb2826135b1565b905460039190911b1c6001600160a01b0390811690841614613cd75750600101613c9e565b9290915015613ce4575050565b600019820191821161090d57613d17613cff613d3b936135b1565b905460039190911b1c6001600160a01b0316916135b1565b81546001600160a01b0393841660039290921b91821b9390911b1916919091179055565b602b548015613d695760001901613d51816135b1565b81549060018060a01b039060031b1b19169055602b55565b634e487b7160e01b600052603160045260246000fd5b505090151580613db9575b613d915750565b602b5490680100000000000000008210156109f157613d178260016134429401602b556135b1565b50600a602b5410613d8a565b6001600160a01b0316908115613e2357613de181600254613640565b6002557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602060009284845283825260408420818154019055604051908152a3565b63ec442f0560e01b600052600060045260246000fd5b6001600160a01b0316908115613c85576001600160a01b0316918215613e23576000828152806020526040812054828110613eb85791604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815280845220818154019055604051908152a3565b916064928463391434e360e21b8452600452602452604452fdfea26469706673582212205d52a2214bdb0ec17ba043066887c907ac1d024ecf2a47fe923656f4fb0220d364736f6c634300081e0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
