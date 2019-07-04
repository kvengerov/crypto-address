var ethers = require('ethers');

export function getEth() {
  var string = document.querySelector<HTMLInputElement>('input#eth').value;
  console.log('Введенная строка:', string);
 
  // https://docs.ethers.io/ethers.js/html/api-utils.html#bytes32-strings
  var messageBytes = ethers.utils.toUtf8Bytes(string);
  var privateKey = ethers.utils.sha256(messageBytes);
  
  // https://docs.ethers.io/ethers.js/html/api-wallet.html
  var wallet = new ethers.Wallet(privateKey);
  console.log('wallet.address', wallet.address);

  document.getElementById('ethAddress').innerHTML = wallet.address;
}
