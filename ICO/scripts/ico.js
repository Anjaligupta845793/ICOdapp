const { ethers } = require("hardhat");

async function main() {
  const ICO = await ethers.getContractFactory("ICO");

  // Deploy the contract
  const ICOContract = await ICO.deploy(
    100,
    1000,
    10,
    "0xA3f1Eb3B3112f9d8ab20274BD90ed4edc032dbF0"
  );

  // Wait for the deployment to be mined
  await ICOContract.deployed();

  console.log("ICO deployed to:", ICOContract.address);
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
