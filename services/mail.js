const sparkpost = require('sparkpost'),
	Bluebird = require('bluebird'),
	_ = require('lodash'),
	config = require('../config.js'),
	logger = require('../utils/logger').logger();


const mail = {
	/**
	** send a template email
	** @params {string/obj} object with email property or email string
	** @params {string} template id
	** @params {obj} template variables
	**/
	sendTemplateMessage: function(recipient, templateId, variables){

		if (!(recipient.name && recipient.address && templateId)) {
			throw new Error('Missing required parameter to send.');
		}

		logger.info(`Sending templated mail ${templateId} to ${recipient.address}`);

		const messageParams = {
			recipients: [{ address: recipient }],
			content: { template_id: templateId },
			substitution_data: variables
		}

		const options = {num_rcpt_errors: 3};

		if (config.nodeEnv === 'test') {
			messageParams.recipients[0].address = 'john.doe@email.com.sink.sparkpostmail.com';
		}

		const client = this.getClient();

		return client.transmissions.send(messageParams)
		.then(result => {

			return result.results;
		})
		.catch(err => {
			const error = new Error(err.message);
			logger.error(err);

			throw error;
		});
	},

	//initiate Sparkpost client
	getClient: function() {
		if (!config.sparkpostApiKey) {
			throw new Error('Sendinblue API key not set');
		}

		return new sparkpost(config.sparkpostApiKey);
	}
};

module.exports = mail;