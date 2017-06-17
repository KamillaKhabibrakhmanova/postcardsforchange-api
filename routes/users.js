'use strict';

var express = require('express');
var config = require('../config.js');
var app = express();
var util = require('util');
var User = require('../models/user');
var request = require('request-promise');
var Bluebird = require('bluebird')

app.post('/', (req, res, next) => {
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();

    req.getValidationResult()
    .then(result => {
        if (!result.isEmpty()) {
            return res.status(400).send('Validation error' + util.inspect(result.array()));
        }

        return User.create(req.body)
        .then(result => {
            res.status(201).send(result);
        })
    })
    .catch(function(err){
        res.status(500).send(err);
    })
})

module.exports = app;
