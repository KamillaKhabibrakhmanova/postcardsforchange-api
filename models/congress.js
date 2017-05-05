'use strict';

var mongoose = require('mongoose');

var CongressSchema = new mongoose.Schema({
	first_name: String,
	middle_name: String,
	last_name: String,
	address: String,
	city: String,
	zip: String,
	state: {type: String, default: 'DC'},
    suffix: {type: String, default: ''},
    street_address: String,
	home_state: String,
	party: String,
	district: Number
});

module.exports = mongoose.model('Congress', CongressSchema);