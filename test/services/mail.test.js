const mail = require('../../services/mail.js'),
	config = require('../../config.js');

describe('Service: Mail (integration)', function() {
  const recipient = {
    email: 'venessiel@gmail.com',
    name: 'KK'
  };

  const test_template = 'my-first-email';

  it('sends mail via Sparkpost', function (done) {
    
    return mail.sendTemplateMessage(recipient, test_template, {name: 'Kamilla'})
    .then(res => {
      console.log('res', res)
    })
    .then(done.bind(null, null), done);
  });

});

