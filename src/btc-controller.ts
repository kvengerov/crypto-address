var bitcore = require('bitcore-lib');

export function getBtc() {
  var string = document.querySelector<HTMLInputElement>('input#btc').value;
  console.log(string);

  // https://github.com/bitpay/bitcore-lib/blob/HEAD/docs/examples.md#generate-a-address-from-a-sha256-hash
  // https://github.com/bitpay/bitcore-lib/blob/master/docs/crypto.md

  var value = Buffer.from(string);
  var hash = bitcore.crypto.Hash.sha256(value);
  var bn = bitcore.crypto.BN.fromBuffer(hash);
  var address = new bitcore.PrivateKey(bn).toAddress();

  document.getElementById('btcAddress').innerHTML = address;
}
