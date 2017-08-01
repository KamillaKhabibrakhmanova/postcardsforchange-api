const sendinblue = require('sendinblue-api'),
	Bluebird = require('bluebird'),
	_ = require('lodash'),
	config = require('../config.js'),
	logger = require('../utils/logger').logger();


const params = {
	apiKey: config.sendInBlueApiKey,
	timeout: 5000
}

const sendinOject = Bluebird.promisifyAll(new sendinblue(params))

const mail = {
	/**
	** send a template email
	** @params {string/obj} object with email property or email string
	** @params {string} template id
	** @params {obj} template variables
	**/
	sendTemplateMessage: Bluebird.method(function(recipient, templateId, variables){

		if (!(recipient && templateId && variables)) {
			throw new Error('Missing required parameter to send.');
		}

		let params = {
			template_name: templateName,
			template_content: [],
			message: {
				merge: true,
				merge_language: 'handlebars',
				global_merge_vars: templateContent,
				to: [ recipient ]
			},
			async: false
		};

		logger.info(`Sending templated mail ${templateName} to ${recipient.email}`)

		return this.getClient().messages.sendTemplateAsync(params)
		.then(result => {
			if (result.length !== 1 || ['sent', 'queued'].indexOf(result[0].status) == -1) {
				throw new Error(JSON.stringify(result));
			}

			return result[0]._id;
		})
		.catch(err => {
			const error = new Error(err.message);
			logger.error(error);

			throw error;
		});
	}),

	/**
	** send a simple email with no template
	** @params {object} required params: {sender, recipient, subject, body}
	**@return {string} Mandrill email id
	**/
	sendMessage: Bluebird.method(messageParams => {
		if (!(messageParams.sender && messageParams.sender.email && messageParams.recipient && messageParams.recipient.email && messageParams.subject && messageParams.body)) {
			throw new Error('Missing required parameters to send Message');
		}

		return this.getClient().messages.sendAsync({
			message: {
				text: messageParams.body,
				subject: messageParams.subject,
				from_email: messageParams.sender.email,
				from_name: messageParams.sender.name,
				to: [{
					email: messageParams.recipient.email,
					name: messageParams.recipient.name
				}]
			},
			async: false
		})
		.then(function(result){
			if (result.length !== 1 || ['sent', 'queued'].indexOf(result[0].status == -1)) {
				throw new Error(JSON.stringify(result));
			}
			return result[0]._id;
		})
		.catch(err => {
			const error = new Error(err.message);
			logger.error(error);

			throw error;
		});
	}),

	//add promises for Mandrill client
	getClient: function() {
		if (!config.mandrillApiKey) {
			throw new Error('MANDRILL_API_KEY not set');
		}

		return function promisified() {
			var args = [].slice.call(arguments);

			var self = this;

			return new Bluebird(function (resolve, reject){
				var emitter = originalMethod.apply(self, args);

				emitter
				.on('sucesss', function(data, response) {
					resolve([data, response])
				})
			})
		}

		let promisifier = function(client) {
			return function () {
				let args = [].slice.call(arguments);
				const self = this;
				return new Promise(function(resolve, reject){
					args.push(resolve, reject);
					client.apply(self, args);
				});
			};
		};

		let client = new Mailin("https://api.sendinblue.com/v2.0", "your access key")

		Bluebird.promisifyAll(client.templates, {promisifier: promisifier});
		Bluebird.promisifyAll(client.messages, {promisifier: promisifier});

		return client;
	}
};

module.exports = mail;