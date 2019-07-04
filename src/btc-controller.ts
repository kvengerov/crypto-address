var bitcore = require('bitcore-lib');

export function getBtc() {
  var string = document.querySelector<HTMLInputElement>('input#btc').value;
  document.getElementById('btcAddress').innerHTML = createAddress(string);
}

function createAddress(string) {
  // https://github.com/bitpay/bitcore-lib/blob/HEAD/docs/examples.md#generate-a-address-from-a-sha256-hash
  // https://github.com/bitpay/bitcore-lib/blob/master/docs/crypto.md
  var value = Buffer.from(string);
  var hash = bitcore.crypto.Hash.sha256(value);
  var bn = bitcore.crypto.BN.fromBuffer(hash);

  var privateKey = new bitcore.PrivateKey(bn)
  document.getElementById('btcprivateKey').innerHTML = privateKey;
  
  var address = privateKey.toAddress();
  return address;
}
