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

		if (!(recipient.name && recipient.email && templateId)) {
			throw new Error('Missing required parameter to send.');
		}

		logger.info(`Sending templated mail ${templateId} to ${recipient.email}`);

		const messageParams = {
			recipients: [{ address: recipient }],
			content: { template_id: templateId },
			substitution_data: variables
		}

		const options = {num_rcpt_errors: 3};

		if (config.nodeEnv === 'test') {
			messageParams.content.from = { name: 'test', email: 'localpart@sparkpostbox.com' };
			options.sandbox = true;
			messageParams.content = {
				from: { name: 'test', email: 'localpart@sparkpostbox.com' },
				subject: 'Big Christmas savings!',
				reply_to: 'Christmas Sales <sales@flintstone.com>',
				text: 'Hi',
				html: '<p>Hi</p>'
			}
		}

		console.log('messageParams', messageParams)

		const client = this.getClient();

		return client.transmissions.send({
			options: {
			sandbox: true
			},
			content: {
			from: 'contact@postcardsforchange.net',
			subject: 'Hello, World!',
			html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
			},
			recipients: [
			{address: 'john.doe@email.com.sink.sparkpostmail.com'}
			]
		})
		.then(result => {
			console.log('result', result)

			return result[0]._id;
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