'use strict';

var express = require('express');
var app = express();
var Bluebird = require('bluebird');
var Senator = Bluebird.promisifyAll(require('../models/senate'));

app.get('/senators', function(req, res){
	console.log('hey senator');
	return Senator.find({home_state: 'TN' })
	.then(function(senators){
		console.log(senators)
		res.send(senators);
	});
});

module.exports = app;