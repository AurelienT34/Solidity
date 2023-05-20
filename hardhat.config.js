require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};
