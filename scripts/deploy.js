const { ethers } = require("hardhat");

/// ENTER FOllOWING DETAILS
const NETWORK = "rinkeby";
const TEAM_ADDRESS = "0x6f99e915Ee5B592a1Fd2203e15B0ECc157B535c8";
const FEE = "10000000000000000"; // fee in ETH (1e18 format)
/// ETHER ABOVE DETAILS

async function main() {
  const HipAssApesNFT = await ethers.getContractFactory("HipAssApesNFT");

  if (TEAM_ADDRESS.length != 0) {
    const hipAssApesNFT = await HipAssApesNFT.deploy(TEAM_ADDRESS);
    console.log(`🎉 HipAssApesNFT Deployed to ${hipAssApesNFT.address}`);
  } else {
    console.log("🔴 Please add team address in the script");
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
