var mongoose = require('mongoose');
var lob = require('../services/lob.js');
var braintree = require('../services/braintree.js');
var User = require('../models/user.js');
var _ = require('lodash');
var Schema = mongoose.Schema;

var PostcardSchema = new mongoose.Schema({
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
    var transaction;
    var userId = postcard.userId;
    var Postcard = this;

    return braintree.makeSale(1, postcard.nonce)
    .then(function(payment){
        if (!payment) throw new Error('Payment unsuccessful');
        transaction = payment;

        return lob.sendPostcard(postcard.message, postcard.to, postcard.from)
        .catch(function(err){
            return braintree.processRefund(transaction.id)
            .then(function(){
                throw new Error(err);
            });
        });
    })
    .then(function(postcard){
        return User.findOne({ email: postcard.email });
    })
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
