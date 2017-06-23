const { promisify } = require('util');
const geocoder = require('geocoder');
const logger = require('../utils/logger').logger();

module.exports = {
	toAddressString: addressObj => `${addressObj.street1}, ${addressObj.street2 || ''}, ${addressObj.city}, ${addressObj.state}, ${addressObj.zip}`,

	//lat long for an address
	getCoordinates: function(addressObj) {
		const address = this.toAddressString(addressObj);

		logger.info('Getting coordinates for address,', {address});
		const geocodeAsync = promisify(geocoder.geocode);

		return geocodeAsync(address)
		.then(res => {
			if (!res.results) return null;
			return res.results[0].geometry.location;
		});
	}
};