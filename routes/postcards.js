var Postcard = require('../models/postcard');
var express = require('express');
var app = express();

app.post('/', function(req, res) {
    if (!req.body.nonce) throw new Error('No payment nonce provided by client');
    if (!(req.body.from && req.body.message)) throw new Error('Missing required postcard fields');

    return Postcard.sendPostcard(req.body)
    .then(function(result){
        return res.status(201).send(result);
    })
    .catch(function(err){
        console.error('err', err)
        res.status(400).send(err);
    });
});

module.exports = app;
