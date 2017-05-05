'use strict';

var mongoose = require('mongoose');

var TrumpSchema = new mongoose.Schema({
	title: String,
	first_name: String,
	last_name: String,
	photo_src: String,
	postcards_sent: String,
	selected: {type: Boolean, default: false},
	order: Number
});

module.exports = mongoose.model('Trump', TrumpSchema);