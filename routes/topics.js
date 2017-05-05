'use strict';

var express = require('express');
var app = express();
var Topic = require('../models/topic');

app.get('/topics', function(req, res){
	console.log('hey hey hey');
	return Topic.find()
	.then(function(topics){
		res.send(topics);
	});
});

module.exports = app;