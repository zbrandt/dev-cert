/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-ethers");

module.exports = {
  solidity: "0.8.24",
  networks: {
	sepolia: {
		url: "https://sepolia.infura.io/v3/9e9ff07b065741568093a54915c4c778",
		accounts: ["6b6a6f430ca714232aa20cf666eadcd3358931a09b32a0252476832f5eebf131"]
	}
  }
};
