import { ethers } from "hardhat";

async function main() {
    console.log("This is main");

    const SimpleFactory = await ethers.getContractFactory("SimpleStorage");

    console.log("Deploying contract....");
    const simpleStorage = await SimpleFactory.deploy();

    await simpleStorage.waitForDeployment();

    console.log("Contract deployed to:", await simpleStorage.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.log(error);
        process.exit(1);
    });
