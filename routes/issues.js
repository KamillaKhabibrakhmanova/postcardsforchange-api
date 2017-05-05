'use strict';

var express = require('express');
var app = express();
var Bluebird = require('bluebird');
var Issue = Bluebird.promisifyAll(require('../models/issue'));

app.get('/', function(req, res){
	return Issue.find({ isActive: true })
	.then(function(issues){
		res.send(issues);
	});
});

module.exports = app;