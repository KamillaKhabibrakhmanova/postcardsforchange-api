const mail = require('../../services/mail.js'),
	config = require('../../config.js');

describe('Service: Mail (integration)', function() {
  const recipient = {
    address: 'venessiel@gmail.com',
    name: 'KK'
  };

  const test_template = 'my-first-email';

  it('sends mail via Sparkpost', function () {
    
    mail.sendTemplateMessage(recipient, test_template, {name: 'Kamilla'})
    .then(res => {
      res.total_accepted_recipients.should.eql(1);
    });
  });

});

