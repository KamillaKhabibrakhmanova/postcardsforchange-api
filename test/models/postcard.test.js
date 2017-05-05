var Postcard = require('../../models/postcard.js');
var User = require('../../models/user.js');
var braintree = require('../../services/braintree');
var lob = require('../../services/lob');
var should = require('should');
var sinon = require('sinon');
var Bluebird = require('bluebird')
require('sinon-as-promised')(Bluebird)

describe('Model: Postcard', function() {

  var sandbox;
  var to = {
    first_name: 'Kamilla',
    address_line1: '101 E 81st St',
    address_city: 'New York City',
    address_state: 'NY',
    address_zip: '10010'
  };

  var from = {
    first_name: 'Mike',
    address_line1: '102 E 92nd St',
    address_city: 'New York City',
    address_state: 'NY',
    address_zip: '10000'
  };

  var description = 'Kamilla Is Awesome';

  var payment_id = '12345';

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    sandbox.stub(braintree, 'makeSale').resolves({id: payment_id});
    sandbox.stub(lob, 'sendPostcard').resolves({ to: to, from: from, message: description });
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('sends a postcard', function (done) {

    return Postcard.sendPostcard({
      to:to,
      from: from,
      message: description,
      nonce: 'fake-paypal-one-time-nonce',
      email: 'fakerston@example.com'
    })
    .then(function (postcard) {
      postcard.to.first_name.should.eql(to.first_name);
      postcard.from.first_name.should.eql(from.first_name);
      postcard.message.should.eql(description);
      postcard.transactionId.should.eql(payment_id);
    })
    .then(done.bind(null, null), done);
  });

  it('creates a user after sending a postcard', function (done) {

    return Postcard.sendPostcard({
      to:to,
      from: from,
      message: description,
      nonce: 'fake-paypal-one-time-nonce',
      email: 'fakerston@example.com'
    })
    .then(function (postcard) {
      return User.findOne({
        email: 'fakerston@example.com'
      })
    }).then(function(user){
      user.first_name.should.eql('Mike');
    })
    .then(done.bind(null, null), done);
  });

});