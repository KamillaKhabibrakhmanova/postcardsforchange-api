'use strict';

var express = require('express');
var app = express();
var Trump = require('../models/trump');

app.get('/trumps', function(req, res){
	return Trump.find()
	.then(function(trumps){
		res.send(trumps);
	});
});

module.exports = app;