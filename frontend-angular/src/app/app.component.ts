import { Component } from '@angular/core';
import { BigNumber, Contract, Wallet, ethers, utils } from 'ethers';
import Lottery from '../assets/Lottery.json';
import LotteryToken from '../assets/LotteryToken.json';

const LOTTERY_ADDRESS = '0xb2b04ede3054c424C546A6698908F22cE752D87a';
const TOKEN_ADDRESS = '0x6bb12A0d9b67ecA47d5ed9f71622b33F71746274';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  blockNumber: number | string | undefined;
  provider: ethers.providers.BaseProvider;
  userWallet: Wallet | undefined;
  userBalance: number | undefined;
  userTokenBalance: number | undefined;
  // tokenContractAddress: string | undefined;
  // tokenContract: Contract | undefined;
  tokenSupply: number | undefined;

  // newly added for lesson 20
  lotteryContractAddress: string | undefined;
  lotteryContract: Contract | undefined;
  tokenContractAddress: string | undefined;
  tokenContract: Contract | undefined;

  constructor() {
    this.provider = ethers.providers.getDefaultProvider('goerli');
    this.lotteryContract = new ethers.Contract(
      LOTTERY_ADDRESS,
      Lottery.abi,
      this.provider
    );
  }

  async checkState() {
    const state = await this.lotteryContract?.['betsOpen']();
    console.log(`The lottery is ${state ? 'open' : 'closed'}\n`);
    if (!state) return;
    const currentBlock = await this.provider.getBlock('latest');
    const currentBlockDate = new Date(currentBlock.timestamp * 1000);
    const closingTime = await this.lotteryContract?.['betsClosingTime']();
    const closingTimeDate = new Date(closingTime.toNumber() * 1000);
    console.log(
      `The last block was mined at ${currentBlockDate.toLocaleDateString()} : ${currentBlockDate.toLocaleTimeString()}\n`
    );
    console.log(
      `lottery should close at ${closingTimeDate.toLocaleDateString()} : ${closingTimeDate.toLocaleTimeString()}\n`
    );
  }

  consoleLog() {
    console.log(this.lotteryContractAddress);
    console.log('clicked button');
  }

  // syncBlock() {
  //   this.blockNumber = 'Loading...';
  //   this.provider.getBlock('latest').then((block) => {
  //     this.blockNumber = block.number;
  //   });
  //   this.
  //       this.tokenContractAddress = answer.result;
  //       this.getTokenInfo();
  //     });
  // }

  // getTokenInfo() {
  //   if (!this.tokenContractAddress) return;
  //   this.tokenContract = new Contract(
  //     this.tokenContractAddress,
  //     tokenJson.abi,
  //     this.userWallet ?? this.provider
  //   );
  //   this.tokenContract['totalSupply']().then((totalSupplyBN: BigNumber) => {
  //     const totalSupplyStr = utils.formatEther(totalSupplyBN);
  //     this.tokenSupply = parseFloat(totalSupplyStr);
  //   });
  // }

  // clearBlock() {
  //   this.blockNumber = undefined;
  // }

  createWallet() {
    this.userWallet = Wallet.connect(this.provider);
    this.userWallet.getBalance().then((balanceBN) => {
      const balanceStr = utils.formatEther(balanceBN);
      this.userBalance = parseFloat(balanceStr);
      this.tokenContract?.['balanceOf'](this.userWallet?.address).then(
        (tokenBalanceBN: BigNumber) => {
          const tokenBalanceStr = utils.formatEther(tokenBalanceBN);
          this.userTokenBalance = parseFloat(tokenBalanceStr);
        }
      );
    });
  }

  // requestTokens(value: string) {
  //   const body = { address: this.userWallet?.address, value: value };
  //   this.http
  //     .post<{ result: any }>(TOKEN_MINT_API_URL, body)
  //     .subscribe((ans) => {
  //       console.log({ ans });
  //     });
  // }

  openBets() {}

  displayBalance() {}

  buyTokens() {}

  displayTokenBalance() {}

  bet() {}

  closeLottery() {}

  displayPrize() {}

  claimPrize() {}

  displayPrizeBalance() {}

  displayOwnerPool() {}

  withdrawOwnerPool() {}

  withdrawTokens() {}

  burnTokens() {}
}
