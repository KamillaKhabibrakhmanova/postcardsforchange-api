const mongoose = require('mongoose');
const lob = require('../services/lob.js');
const braintree = require('../services/braintree.js');
const User = require('../models/user.js');
const _ = require('lodash');
const Schema = mongoose.Schema;

const PostcardSchema = new mongoose.Schema({
    message: String,
    price: Number,
    from: {
        first_name: String,
        last_name: String,
        name: String,
        street_address: String,
        city: String,
        state: String,
        zip: Number
    },
    to: {
        first_name: String,
        last_name: String,
        name: String,
        street_address: String,
        city: String,
        state: String,
        zip: Number
    },
    //braintree transaction
    transactionId : String,
    front: String,

    user: [{ type: Schema.ObjectId, ref: 'User' }],
    issue: [{ type: Schema.ObjectId, ref: 'Issue'}],
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

module.exports = mongoose.model('Postcard', PostcardSchema);
