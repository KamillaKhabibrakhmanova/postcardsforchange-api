var config = {
	googleApiKey: process.env.GOOGLE_API_KEY,
	nodeEnv: process.env.NODE_ENV || 'dev',
	database: process.env.MONGODB_URI,
	braintreeAccessToken: process.env.BRAINTREE_ACCESS_TOKEN,
	ssl_passphrase: process.env.SSL_PASSPHRASE,
	braintreeMerchantId: process.env.BRAINTREE_MERCHANT_ID,
	braintreePublicKey: process.env.BRAINTREE_PUBLIC_KEY,
	braintreePrivateKey: process.env.BRAINTREE_PRIVATE_KEY,
	lobApiKey: process.env.LOB_API_KEY,
	sparkpostApiKey: process.env.SPARKPOST_API_KEY,

	//mandrill template names
	postcardConfirmationTemplate: process.env.POSTCARD_CONFIRMATION_TEMPLATE || 'postcard_confirmation'
};

module.exports = config;