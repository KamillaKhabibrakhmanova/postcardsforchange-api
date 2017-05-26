const mail = require('../../services/mail.js'),
	config = require('../../config.js');

describe.skip('Service: Mail (integration)', function() {

  it('sends mail via Mandrill', function (done) {
    
    return mail.sendMessage({
      subject: 'Hello',
      sender: { name: 'Kamilla', email: 'xxx@example.com' },
      recipient: {name: 'Mike', email: 'mike@gmail.com' },
      body: '<h1>Hello</h1>'
    })
    .then(done.bind(null, null), done);
  });

  it('sends mail via Mandrill', function (done) {
    
    return mail.sendTemplateMessage('venessiel@gmail.com', config.postcardConfirmationTemplate, {
    	postcardFrontUrl: 'sample.jpg',
    	postcardBackUrl: 'sample.jpg'
    })
    .then(done.bind(null, null), done);
  });

});

