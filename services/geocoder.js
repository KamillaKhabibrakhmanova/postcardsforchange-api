const Bluebird = require('Bluebird');
const geocoder = Bluebird.promisifyAll(require('geocoder'));
const logger = require('../utils/logger').logger();

module.exports = {
	toAddressString: addressObj => `${addressObj.street1}, ${addressObj.street2 || ''}, ${addressObj.city}, ${addressObj.state}, ${addressObj.zip}`,

	//lat long for an address
	getCoordinates: function(addressObj) {
		const address = this.toAddressString(addressObj);

		logger.info('Getting coordinates for address,', {address});

		return geocoder.geocodeAsync(address)
		.then(res => {
			if (!res.results) return null;
			return res.results[0].geometry.location;
		});
	}
};