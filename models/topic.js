'use strict';

var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
	title: String,
	description: String,
	link: String,
	src: String,
	selected: {type: Boolean, default: false},
	number_chosen: {type: Number, default: 0},
	messages: Array
});

module.exports = mongoose.model('Topic', TopicSchema);