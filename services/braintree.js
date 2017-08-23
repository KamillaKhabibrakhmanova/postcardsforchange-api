const Bluebird = require('bluebird');
const config = require('../config');
const Postcard = require('../models/postcard');
const braintree = require('braintree');
const logger = require('../utils/logger').logger();

const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: config.braintreeMerchantId,
  publicKey: config.braintreePublicKey,
  privateKey: config.braintreePrivateKey
});

const createSaleObject = (amount, nonce) => {
	return {
	  amount,
	  paymentMethodNonce: nonce,
	  orderId: "Mapped to PayPal Invoice Number",
	  options: {
	  	submitForSettlement: true
	  }
  };
};

const braintreeTransaction = Bluebird.promisifyAll(gateway.transaction);

module.exports = {

	//generate token required to get a nonce in the client
	generateToken: () => {
		const clientToken = Bluebird.promisifyAll(gateway.clientToken);

		return clientToken.generateAsync({})
		.then(function(token){
			return token;
		});
	},

	//process payment
	makeSale: (amount, nonce) => {
		const saleRequest = createSaleObject(amount, nonce);

		return braintreeTransaction.saleAsync(saleRequest)
		.then(function(result){
			if (!result.success) throw new Error(result.message);

			return result.transaction;
		});
	},

	processRefund: (transactionId, amount) => {
		return braintreeTransaction.findAsync(transactionId)
		.then(transaction => {
			if (!amount) amount = transaction.amount;

			if (transaction.status === 'settled' || transaction.status === 'settling') {
				return braintreeTransaction.refundAsync(transaction.id, amount);
			}
			else {
				return braintreeTransaction.voidAsync(transaction.id, amount);
			}
		})
		.then(result => {
			if (!result.success) throw new Error(result.message);

			return result;
		})
		.catch(function(err){
			logger.error(err);
			throw new Error(err);
		})
	}
};
