var Bluebird = require('bluebird');
var config = require('../config');
var Postcard = require('../models/postcard');
var braintree = require('braintree');

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: config.braintreeMerchantId,
  publicKey: config.braintreePublicKey,
  privateKey: config.braintreePrivateKey
});

var createSaleObject = function(amount, nonce) {
	return {
	  amount: amount,
	  paymentMethodNonce: nonce,
	  orderId: "Mapped to PayPal Invoice Number",
	  options: {
	  	submitForSettlement: true
	  }
	  //descriptor: { name: "GeneralBear*Postblue" }
  };
};

var braintreeTransaction = Bluebird.promisifyAll(gateway.transaction);

module.exports = {

	generateToken: function() {
		var clientToken = Bluebird.promisifyAll(gateway.clientToken);

		return clientToken.generateAsync({})
		.then(function(token){
			return token;
		});
	},

	makeSale: function(amount, nonce) {
		var saleRequest = createSaleObject(amount, nonce);

		return braintreeTransaction.saleAsync(saleRequest)
		.then(function(result){
			if (!result.success) throw new Error(result.message);

			return result.transaction;
		});
	},

	processRefund: function(transactionId){
		return braintreeTransaction.findAsync(transactionId)
		.then(function(transaction){
			if (transaction.status === 'settled' || transaction.status === 'settling') {
				return braintreeTransaction.refundAsync(transaction.id);
			}
			else {
				return braintreeTransaction.voidAsync(transaction.id);
			}
		})
		.then(function(result){
			if (!result.success) throw new Error(result.message);

			return result;
		})
		.catch(function(err){
			console.error(err);
			throw new Error(err);
		})
	}
};
