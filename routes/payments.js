var express = require('express');
var app = express();
var braintree = require('../services/braintree');
const logger = require('../utils/logger').logger();

//generate required token for braintree payments
app.get('/client-token', (req, res) => {
	logger.info('Creating new client token');

	return braintree.generateToken()
	.then(result => {
		if (result.success) {
			return res.status(200).send({ clientToken: result.clientToken });
		} else res.status(400).send('Error generating client token.');
	});
});

//process payment with nonce
app.post('/', (req, res) => {
	return braintree.makeSale(req.body.amount, req.body.nonce)
	.then(function(result){
		res.send(result);
	})
	.catch(function(err){
		res.status(400).send('Error processing payment: ' + err);
	});
});

module.exports = app;