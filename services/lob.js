const config = require('../config');
const Bluebird = require('bluebird');
const _ = require('lodash');
const Lob = Bluebird.promisifyAll(require('lob')(config.lobApiKey));
const postcardTemplates = require('../templates/postcardTemplates');
const Issue = require('../models/issue');
const logger = require('../utils/logger').logger();

//format address to fit lob requirements
const getLobFormattedAddress = addressObject => {
	return {
		name: addressObject.name,
		address_line1: addressObject.line1,
		address_line2: addressObject.line2,
		address_city: addressObject.city,
		address_state: addressObject.state,
		address_zip: addressObject.zip
	};
};

module.exports = {

	//** sendIssuePostcard: send issue card via lob
	//@params {obj} Issue instance
	//@params {obj} representative from google civic service
	//@params {from} address object with sender name and address: {name, line1, line2, city, state, zip}
	//@return {obj} lob postcard object
	sendIssuePostcard: (issue, representative, from) => {
		
		if (!issue|| !representative || !from) {
			throw new Error('Missing required parameder');
		}

		if (!representative.name) {
			representative = JSON.parse(representative);
		}
		
		const representativeAddress = getLobFormattedAddress(_.merge({name: representative.name}, representative["address"][0]));
		const fromAddress = getLobFormattedAddress(from);

		const params = {
			to: representativeAddress,
			from: fromAddress,
			description: issue.title,
			message: issue.message,
			front: issue.postcardImage || issue['postcard_image'] 
		};

		logger.info('Sending postcard', params);

		return Lob.postcards.create(params)
		.then(res => {
			logger.info('Postcard successfully sent', {res});
			return res;
		})
		.catch(err => {
			logger.error('Error sending postcard', err);
			throw new Error(err);
		});
	}
};