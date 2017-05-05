'use strict';

var mongoose = require('mongoose');

var SenateSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	street_address: String,
	city: {type: String, default: 'Washington'},
	zip: {type: String, default: '20510'},
	state: {type: String, default: 'DC'},
	home_state: String,
	party: String
});

module.exports = mongoose.model('Senate', SenateSchema);