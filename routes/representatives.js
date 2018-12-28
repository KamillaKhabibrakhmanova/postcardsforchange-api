'use strict';

var express = require('express');
var app = express();
var Bluebird = require('bluebird');
var civic = require('../services/civic');
const logger = require('../utils/logger').logger();
var url = require('url')

//get reps
app.get('/', function(req, res, next){
	if (!req.query.address) res.status(400).send('No address provided');

	return civic.getNationalRepresentatives(req.query.address)
	.then(result=> {
		res.send(result);
	})
	.catch(err =>{
		console.error(err)
		logger.error(err);
		next(err);
	});
});


module.exports = app;