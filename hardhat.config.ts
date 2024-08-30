import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"
import "hardhat-gas-reporter"
import "@typechain/hardhat"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    sepolia:{
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
    }
  },

  gasReporter:{
    enabled : true,
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: "USD"
  }
};
