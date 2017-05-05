var braintree = require('../../services/braintree.js');
var Bluebird = require('bluebird');
var should = require('should');

describe('Service: Braintree (integration)', function() {
  this.timeout(15000);

  it('generates a client token', function (done) {

    return braintree.generateToken()
    .then(function (res) {
      res.success.should.eql(true);
      should.exist(res.clientToken);
    })
    .then(done.bind(null, null), done);
  });

   it('throws an error for invalid payment nonces', function (done) {

    return braintree.makeSale(50, 'kamz').should.be.rejected()
    .then(done.bind(null, null), done);
  });

  it('generates a sale', function (done) {

    return braintree.makeSale(50, 'fake-paypal-one-time-nonce')
    .then(function(res){
      res.amount.should.eql('50.00');
      should.exist(res.creditCard);
      should.exist(res.statusHistory);
      should.exist(res.paypal);
    })
    .then(done.bind(null, null), done);
  });

  it('refunds a sale', function (done) {

    return braintree.makeSale(50, 'fake-paypal-one-time-nonce')
    .then(function(res){
      return braintree.processRefund(res.id)
    })
    .then(function(res) {
      res.success.should.eql(true);
    })
    .then(done.bind(null, null), done);
  });

});