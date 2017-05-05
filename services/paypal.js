'use strict';

var Bluebird = require('bluebird');
var config = require('../config');
var Postcard = require('../models/postcard');
var paypal = Bluebird.promisifyAll(require('paypal-rest-sdk'));

paypal.configure({
	'mode': config.paypalEnv,
	'client_id': config.paypalClientId,
	'client_secret': config.paypalClientSecret
});

var confirmPayment = function (paymentId) {
	var payment = Bluebird.promisifyAll(paypal.payment);
	return payment.getAsync(paymentId);
};

var checkForExistingPostcard = function(paymentId) {
	console.log('paymentId', paymentId)
	return Postcard.findOne({payment_id: paymentId})
	.then(function(postcard) {
		console.log("postcard", postcard)
		return !!postcard;
	});
};

module.exports = {

	checkAndConfirm: function(paymentId) {

		return checkForExistingPostcard(paymentId)
		.then(function(postcard){
			if (!postcard) return confirmPayment(paymentId);
			else return;
		})
		.then(function(payment){
			return payment;
		});

	}


};
