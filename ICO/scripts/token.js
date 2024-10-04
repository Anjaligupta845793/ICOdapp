const { ethers } = require("hardhat");

async function main() {
  const TOKEN = await ethers.getContractFactory("StakeToken");

  // Deploy the contract
  const TokenContract = await TOKEN.deploy();

  // Wait for the deployment to be mined
  await TokenContract.deployed();

  console.log("token deployed to:", TokenContract.address);
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
