var Postcard = require('../models/postcard');
var express = require('express');
var app = express();
const logger = require('../utils/logger').logger();

//process payment and send a postcard
app.post('/', (req, res) => {
    const body = req.body;
    
    if (!body.nonce) throw new Error('No payment nonce provided by client');
    if (!body.issueId) throw new Error('No issue provided');
    if (!body.user) throw new Error('No user provided');
    if (!body.representatives) throw new Error('No recipients provided');

    return Postcard.sendPostcards(body.issueId, body.nonce, body.user, body.representatives)
    .then(result => {
        // is it bad to send 201 for errored postcards?
        // if not 201 the errored postcards array can't be retrieved
        if ((result.postcards && result.postcards.length) || result.errorMessage) {
            return res.status(201).send(result);
        }
        else {
            return res.status(500).send(result);
        }
    })
    .catch(err => {
        logger.error('err', err)
        res.status(500).send(err);
    });
});

module.exports = app;