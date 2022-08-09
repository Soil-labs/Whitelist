const { ethers } = require("hardhat");

async function main() {
  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: "0x252009bd624ade09dcaa1aa17e71be44ce2044bc",
    constructorArguments: ["0x16fa7aeb965b7292e1b7b140d6bcd849511cc343"],
  });
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });