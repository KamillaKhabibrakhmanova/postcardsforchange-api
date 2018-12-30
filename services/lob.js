const config = require('../config');
const Bluebird = require('bluebird');
const _ = require('lodash');
const Lob = Bluebird.promisifyAll(require('lob')(config.lobApiKey));
const logger = require('../utils/logger').logger();


//!!!!! V IMPORTANT: CHAGE THIS BACK ONCE TEST IS DONE
//format address to fit lob requirements
const getLobFormattedAddress = addressObject => {
	// return {
	// 	name: addressObject.name,
	// 	address_line1: addressObject.line1,
	// 	address_line2: addressObject.line2,
	// 	address_city: addressObject.city,
	// 	address_state: addressObject.state,
	// 	address_zip: addressObject.zip
	// };

	return {
    name: 'Kamilla Khabibrakhmanova',
		address_line1: '1157 3rd Ave',
		address_line2: 'Apt 10',
    address_city: 'New York',
    address_state: 'NY',
    address_zip: '10065'
  };
};

//** getBackPostcardTemplate: get postcard back html string
//@params {str} (required) name of politican being sent the postcard
//@params {str} (required) name of postcard sender
//@params {str} (required) message to send
//@return {str} html template
const getBackPostcardTemplate = (politician, name, message) => {
	if (!politician || !name || !message) {
		throw new Error('Missing required params for postcard message');
	}

	return `<html>
	<head>
	<meta charset="UTF-8">
	<title>Postcard for Change</title>
	<style>
	  *, *:before, *:after {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	  }
	  body {
		width: 6.25in;
		height: 4.25in;
		margin: 0;
		padding: 0;
		background-color: white;
	  }
	  /* do not put text outside of the safe area */
	  #safe-area {
		position: absolute;
		width: 5.875in;
		height: 3.875in;
		left: 0.1875in;
		top: 0.1875in;
	  }
	  #message {
		position: absolute;
		width: 2.2in;
		height: 2in;
		top: 1.4in;
		left: .25in;
		font-family: 'Lato';
		font-weight: 400;
		font-size: .122in;
	  }
	</style>
	</head>
	<body>
	  <!-- do not put text outside of the safe area -->
	  <div id="safe-area">
		<div id="message">
		  <span class="accent">Dear ${politician},</span>
		  <br><br>
		  ${message}
		  <br><br>
		  Thank you,
		  <br><br>
		  ${name}
		</div>
	  </div>
	</body>
	</html>`
}

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
			back: getBackPostcardTemplate(representative.name, from.name, issue.message),
			front: issue.postcardImage || issue['postcard_image'] 
		};

		logger.info('Sending postcard', {representative, from, issue});



		return Lob.postcards.create(params)
		.then(res => {
			logger.info('Postcard successfully sent', {res});
			return res;
		});
	}
};