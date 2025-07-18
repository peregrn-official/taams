require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { MEGAETH_RPC_URL, PRIVATE_KEY, MEGAETH_CHAIN_ID } = process.env;

module.exports = {
  solidity: {
    version: "0.8.30",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
      debug: {
        revertStrings: "strip", // Supprime les chaînes de reversion
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks: {
    megaeth: {
      url: MEGAETH_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: parseInt(MEGAETH_CHAIN_ID),
    },
  },
};