var express = require('express');
var app = express();
var braintree = require('../services/braintree');
const logger = require('../utils/logger').logger();

app.get('/client-token', function(req, res){
	logger.info('Creating new client token');
	return braintree.generateToken()
	.then(function(result){
		if (result.success) {
			return res.status(200).send({ clientToken: result.clientToken });
		} else res.status(400).send('Error generating client token.');
	});
});

app.post('/', function(req, res){
	return braintree.makeSale(req.body.amount, req.body.nonce)
	.then(function(result){
		res.send(result);
	})
	.catch(function(err){
		res.status(400).send('Error processing payment: ' + err);
	});
});

module.exports = app;