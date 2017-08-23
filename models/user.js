'use strict';

const mongoose = require('mongoose'),
	{promisify} = require('util'),
	Schema = mongoose.Schema,
	emailExistence = require('email-existence'),
	uniqueValidator = require('mongoose-unique-validator');


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    address: {
	    zip: String,
	   	state: String,
	   	street1: String,
	   	street2: String,
	   	city: String,
	  }
});

UserSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', UserSchema);