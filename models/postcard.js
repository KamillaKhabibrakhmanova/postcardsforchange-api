'use strict';

const mongoose = require('mongoose');
const Bluebird = require('bluebird');
const lob = require('../services/lob.js');
const mail = require('../services/mail');
const braintree = require('../services/braintree.js');
const User = require('../models/user.js');
const Issue = require('../models/issue.js');
const logger = require('../utils/logger').logger();
const config = require('../config');
const _ = require('lodash');
const Schema = mongoose.Schema;

const PostcardSchema = new mongoose.Schema({
    price: Number,
    //braintree transaction
    transactionId : String,
    //lobId
    lobId: String,
    front: String,

    user: { type: Schema.ObjectId, ref: 'User' },
    issue: { type: Schema.ObjectId, ref: 'Issue'},
});

PostcardSchema.statics.sendPostcard = function(postcard){
    if (!postcard.nonce) throw new Error('No payment method nonce provided');
    let transaction;
    const userId = postcard.userId;
    const Postcard = this;

    //collect payment first
    return braintree.makeSale(1, postcard.nonce)
    .then(function(payment){
        if (!payment) throw new Error('Payment unsuccessful');
        transaction = payment;

        return lob.sendPostcard(postcard.message, postcard.to, postcard.from)
        .catch(function(err){
            //if postcard not sent refund user
            return braintree.processRefund(transaction.id)
            .then(function(){
                throw new Error(err);
            });
        });
    })
    .then(function(postcard){
        return User.findOne({ email: postcard.email });
    })
    //create or update user info
    .then(function(user){
        if (!user) {
            return User.create(_.merge({email: postcard.email}, postcard.from));
        } else {
            return user.update(postcard.from);
        }
    })
    .then(function(user){
        return Postcard.create({
            to: postcard.to,
            from: postcard.from,
            message: postcard.message,
            price: 1,
            userId:  user._id,
            transactionId: transaction.id
        });
    });
};

PostcardSchema.statics.sendPostcards = async function (issueId, nonce, user, representatives) {
    if (!nonce) throw new Error('No payment method nonce provided');

    const Postcard = this;
    const representativeCount = representatives.length;
    const postcardErrors = [];
    user.name = user.firstName + ' ' + user.lastName;
    const res = {postcards: []};

    //charge full amount for postcards
    let issue = await Issue.findById(issueId);
    let transaction;
    try {
        transaction = await braintree.makeSale(representativeCount, nonce);
        if (!transaction.id) throw new Error('Error making payment')
    } catch(e) {
        throw new Error(e);
    }
    
    //send a separate postcard for each representative
    return Bluebird.map(representatives, function(representative){
        return lob.sendIssuePostcard(issue, representative, user)
        .then(function(card){
            res.postcards.push(card);
        })
        .catch(function(err){
            logger.error('Error sending postcard',  {err, representative});
            postcardErrors.push(representative);
        })
    }).then(function(){
        //process a refund if any postcards didn't send
        if (postcardErrors.length) {
            res.errorMessage = `Failed to send ${postcardErrors.length} postcards`;
            res.unsent = postcardErrors;

            return braintree.processRefund(transaction.id, `${postcardErrors.length}.00`)
        } else return;
    }).then(function(){
        //send email confirmaton - no need to wait for this to be resolved
        if (res.postcards.length) {
            const name = user.firstName + ' ' + user.lastName;
            const recipient = { name: name, address: user.email };
            const params = {
                name: name,
                image_src: issue.postcardImage,
                amount: res.postcards.length.toString() + '.00',
                delivery_date: res.postcards[0]["expected_delivery_date"]
            }
            mail.sendTemplateMessage(recipient, config.postcardConfirmationTemplate, {
                name: name,
                image_src: issue.postcardImage,
                amount: res.postcards.length.toString() + '.00',
                delivery_date: res.postcards[0]["expected_delivery_date"]
            })
            .catch(err => {
                logger.error('Error sending confirmatiion message', {error: err, user: user})
            })
        }
       
        return User.findOne({ email: user.email });
    })
    //create or update user info
    .then(function(found){
        if (!found) {
            return User.create(user);
        } else {
            return found.update(user);
        }
    }).then(function(updated){

        if (!res.postcards) return;
        return Bluebird.map(res.postcards, function(postcard) {
            return Postcard.create({
                lobId: postcard.id,
                transactionId: transaction.id,
                user: updated._id,
                issue: issue._id,
                price: 1
            })
        })
    }).then(function(createdPostcards){
        res.postcards = createdPostcards || null;
        return res;
    });
}

module.exports = mongoose.model('Postcard', PostcardSchema);
