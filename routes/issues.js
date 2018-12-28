'use strict';

var express = require('express');
var app = express();
var Bluebird = require('bluebird');
var Issue = require('../models/issue');

//get a single issue
app.get('/:id', function(req, res){
	return Issue.findById(req.params.id)
	.then(function(issue){
		res.send(issue);
	});
});

//get all active issues
app.get('/', function(req, res){
	return Issue.find({ isActive: true })
	.then(function(issues){
		res.send(issues);
	});
});


module.exports = app;