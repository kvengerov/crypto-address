import {getEth, getBalance} from './eth-controller';
import {getBtc} from './btc-controller';

export function getEthAdrress() {
  getEth();
}

export function getBtcAdrress() {
  getBtc();
}

export function checkBalance() {
  getBalance();
}