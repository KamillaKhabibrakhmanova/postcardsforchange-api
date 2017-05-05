'use strict';

var express = require('express');
var config = require('../config.js');
var app = express();
var User = require('../models/user');
var request = require('request-promise');
var Bluebird = require('bluebird')

//no need for users route at the moment

module.exports = app;
