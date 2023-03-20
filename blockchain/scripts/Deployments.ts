import { Provider } from "@ethersproject/providers";
import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import { Lottery, Lottery__factory } from "../typechain-types";
dotenv.config();

let contract: Lottery;

const BET_PRICE = "1";
const BET_FEE = "0.2";
const TOKEN_RATIO = 1;

async function main() {
  const provider = new ethers.providers.AlchemyProvider(
    "goerli",
    process.env.ALCHEMY_API_KEY
  );

  const privateKey = process.env.PRIVATE_KEY;

  if (!privateKey || privateKey.length <= 0)
    throw new Error("PRIVATE_KEY is not set");

  const wallet = new ethers.Wallet(privateKey);
  const signer = wallet.connect(provider);
  //const signers = await ethers.getSigners();
  const balance = await signer.getBalance();
  console.log(`The account ${signer.address} has a balance of  ${balance} Wei`);

  //DEPLOYMENT
  const lotteryContractFactory = new Lottery__factory(signer);
  console.log("Deploying contract...");
  const lotteryContract = await lotteryContractFactory.deploy(
    "LotteryToken",
    "LT0",
    TOKEN_RATIO,
    ethers.utils.parseEther(BET_PRICE),
    ethers.utils.parseEther(BET_FEE),
    // { gasLimit: 300000 }
  );
  console.log("Awaiting for confirmations...");
  const txReceipts = await lotteryContract.deployTransaction.wait();
  console.log(
    `Contract deployed to ${txReceipts.contractAddress} in the block number ${txReceipts.blockNumber}`
  );

  const tokenAddress = await contract.paymentToken();
  console.log(
    `The Token contract was deployed at address ${tokenAddress} `
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
