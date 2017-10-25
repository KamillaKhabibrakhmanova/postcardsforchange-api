'use strict';

var express = require('express');
var config = require('../config.js');
const app = express();
const util = require('util');
const User = require('../models/user');
const request = require('request-promise');
const { check, validationResult } = require('express-validator/check');
const logger = require('../utils/logger').logger();

app.post('/', [
    check('email')
    .exists()
    .isEmail().withMessage('Must be an email')
], (req, res, next) => {
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
    }

    return User.create(req.body)
    .then(result => {
        res.status(201).send(result);
    })
    .catch(function(err){
        logger.error(err);
        res.status(500).send(err);
    })
});

module.exports = app;
