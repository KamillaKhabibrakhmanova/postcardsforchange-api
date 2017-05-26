const mandrill = require('mandrill-api/mandrill'),
	Bluebird = require('bluebird'),
	_ = require('lodash'),
	config = require('../config.js'),
	logger = require('../utils/logger').logger();


const mandrill_client = new mandrill.Mandrill(config.mandrillApiKey);

const mail = {
	/**
	** send a template email
	** @params {string/obj} object with email property or email string
	** @params {string} template name
	** @params {obj} Mandrill email id
	**/
	sendTemplateMessage: Bluebird.method(function(recipient, templateName, variables){
		if (typeof recipient === 'string') {
			recipient = {email: recipient}
		}

		if (!(recipient && recipient.email && templateName && variables)) {
			throw new Error('Missing required parameter to send.');
		}

		variables = _.merge({}, variables, {emailRecipient: recipient });

		var templateContent = _.reduce(variables, function (acc, value, key){
			acc.push({ name: key, content: value });
			return acc;
		}, []);

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

		let client = new mandrill.Mandrill(config.mandrillApiKey);

		Bluebird.promisifyAll(client.templates, {promisifier: promisifier});
		Bluebird.promisifyAll(client.messages, {promisifier: promisifier});

		return client;
	}
};

module.exports = mail;