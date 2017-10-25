var braintree = require('../../services/braintree.js');
var Bluebird = require('bluebird');
var should = require('should');

describe('Service: Braintree (integration)', function() {
  this.timeout(15000);

  it('generates a client token', function () {

    return braintree.generateToken()
    .then(function (res) {
      res.success.should.eql(true);
      should.exist(res.clientToken);
    });
  });

   it('throws an error for invalid payment nonces', function () {

    return braintree.makeSale(50, 'kamz').should.be.rejected();
  });

  it('generates a sale', function (done) {

    braintree.makeSale(50, 'fake-paypal-one-time-nonce')
    .then(function(res){
      res.amount.should.eql('50.00');
      should.exist(res.creditCard);
      should.exist(res.statusHistory);
      should.exist(res.paypal);
    })
    .then(done.bind(null, null), done)
  });

  it('refunds a sale', function () {

    return braintree.makeSale(50, 'fake-paypal-one-time-nonce')
    .then(function(res){
      return braintree.processRefund(res.id)
    })
    .then(function(res) {
      res.success.should.eql(true);
    });
  });

});