'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	uniqueValidator = require('mongoose-unique-validator');


var UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    first_name: String,
    last_name: String,
    zip: String,
    state: String,
});

UserSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', UserSchema);