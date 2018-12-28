const Bluebird = require('bluebird');
const geocoder = Bluebird.promisifyAll(require('geocoder'));
const logger = require('../utils/logger').logger();

module.exports = {
	toAddressString: function(addressObj) {
		return `${addressObj.street1}, ${addressObj.street2 || ''}, ${addressObj.city}, ${addressObj.state}, ${addressObj.zip}`;
	},

	//the the lat & long coordinates for an address
	getCoordinates: function(addressObj) {
		const address = this.toAddressString(addressObj);

		logger.info('Getting coordinates for address,', {address});

		return geocoder.geocodeAsync(address)
		.then(function(res){
			if (!res.results) return null;
			return res.results[0].geometry.location;
		});
	}

	//TODO: use coordinates to look up representatives
};