const config = require('../config');
const Bluebird = require('bluebird');
const Lob = Bluebird.promisifyAll(require('lob')(config.lobApiKey));
const postcardTemplates = require('../templates/postcardTemplates');
const logger = require('../utils/logger').logger();

let getLobFormattedAddress = (addressObject) => {
	return {
		name: addressObject.name,
		address_line1: addressObject.street_address,
		address_city: addressObject.city,
		address_state: addressObject.state,
		address_zip: addressObject.zip
	};
};

module.exports = {

	sendPostcard: function(description, to, from) {	
		return Lob.postcards.create({
			description: description,
			to: getLobFormattedAddress(to),
			from: getLobFormattedAddress(from),
			front: postcardTemplates.front(),
			back: postcardTemplates.back()
		}).then(function(res){
			logger.info('Postcard successfully sent', {res});
			return res;
		})
		.catch(function(err){
			logger.error('Error sending postcard', err);
			throw err;
		});
	}
};