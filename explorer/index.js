setTimeout(function(){startup()}, 2000);



var Web3 = require('web3');

function startup(){
  console.log('starting');

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
  }

  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

  console.log(web3);

  var coinbase = web3.eth.coinbase;
  console.log("coinbase = ", coinbase);
  var balance = web3.eth.getBalance(coinbase);
  console.log("balance = ", balance);
}

module.exports = startup;
