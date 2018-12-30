const Bluebird = require('bluebird');
const config = require('../config');
const Postcard = require('../models/postcard');
const braintree = require('braintree');
const logger = require('../utils/logger').logger();
const uuid = require('uuid/v4');

const braintreeEnvironment = config.nodeEnv === 'production' ? braintree.Environment.Production : braintree.Environment.Sandbox;

const gateway = braintree.connect({
  environment: braintreeEnvironment,
  merchantId: config.braintreeMerchantId,
  publicKey: config.braintreePublicKey,
  privateKey: config.braintreePrivateKey
});

const createSaleObject = (amount, nonce) => {
	return {
	  amount,
	  paymentMethodNonce: nonce,
	  orderId: uuid(),
	  options: {
	  	submitForSettlement: true
	  }
  };
};

module.exports = {

	//generate token required to get a nonce in the client
	generateToken: () => {
		const clientToken = gateway.clientToken;

		return clientToken.generate({})
		.then(function(token){
			return token;
		});
	},

	//process payment
	makeSale: (amount, nonce) => {
		const saleRequest = createSaleObject(amount, nonce);

		return gateway.transaction.sale(saleRequest)
		.then(function(result){
			if (!result.success) throw new Error(result.message);

			return result.transaction;
		});
	},

	processRefund: (transactionId, amount) => {
		logger.info('Processing refund', transactionId, amount);
		return gateway.transaction.find(transactionId)
		.then(transaction => {
			if (!amount) amount = transaction.amount;

			if (transaction.status === 'settled' || transaction.status === 'settling') {
				return gateway.transaction.refund(transaction.id, amount);
			}
			else {
				return gateway.transaction.void(transaction.id, amount);
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
