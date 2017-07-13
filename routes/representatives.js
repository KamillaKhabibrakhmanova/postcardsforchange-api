'use strict';

var express = require('express');
var app = express();
var Bluebird = require('bluebird');
var civic = require('../services/civic');
var url = require('url')

//get reps
app.get('/', function(req, res, next){
	if (!req.query.address) res.status(400).send('No address provided');

	return civic.getNationalRepresentatives(req.query.address)
	.then(result=> {
		console.log('result', result)
		res.send(result);
	})
	.catch(err => next(err))
});


module.exports = app;