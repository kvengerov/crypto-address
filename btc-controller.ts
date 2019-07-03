var bitcore = require('bitcore-lib');

function getBtc() {
  var string = document.querySelector<HTMLInputElement>('input#btc').value;
  console.log(string);

  // https://github.com/bitpay/bitcore-lib/blob/HEAD/docs/examples.md#generate-a-address-from-a-sha256-hash
  // https://github.com/bitpay/bitcore-lib/blob/master/docs/crypto.md
  var hash = bitcore.crypto.Hash.sha256(string);
  var bn = bitcore.crypto.BN.fromBuffer(hash);
  var address = new bitcore.PrivateKey(bn).toAddress();
  console.log(address);

  document.getElementById('btcAddress').innerHTML = address;
}
