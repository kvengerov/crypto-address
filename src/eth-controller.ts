var ethers = require('ethers');
let provider = ethers.getDefaultProvider('ropsten');

var address;
var privKey;
var ourAddress;

export function getEth() {
  var string = document.querySelector<HTMLInputElement>('input#eth').value;
  address = createAddress(string);
  document.getElementById('ethAddress').innerHTML = address;
}

export function getBalance() {
  // ourAddress = '0xC255ed6be2EED089EEBc3d86d87925CCc3d1a47e'; // 1.0 Ether
  ourAddress = address;
  provider.getBalance(ourAddress).then((balance) => {
    let etherString = ethers.utils.formatEther(balance);
    document.getElementById('ethCheckBalance').innerHTML = etherString + ' Ether';
  });
}

function createAddress(string) {
  // https://docs.ethers.io/ethers.js/html/api-utils.html#bytes32-strings
  var messageBytes = ethers.utils.toUtf8Bytes(string);
  var privateKey = ethers.utils.sha256(messageBytes);
  document.getElementById('ethprivateKey').innerHTML = privateKey

  // https://docs.ethers.io/ethers.js/html/api-wallet.html
  var wallet = new ethers.Wallet(privateKey);
  console.log('wallet.address', wallet.address);
  return wallet.address;
}
