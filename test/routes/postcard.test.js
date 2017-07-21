const app = require('../../app');

const _ = require('lodash'),
    should = require('should'),
    sinon = require('sinon'),
    braintree = require('../../services/braintree'),
    lob = require('../../services/lob'),
    request = require("supertest"),
    Bluebird = require('bluebird');
  
describe('Route: /postcards', function() {

  var sandbox;
  var to = {
    name: 'Kamilla',
    street_address: '101 E 81st St',
    city: 'New York City',
    state: 'NY',
    zip: '10010'
  };

  var from = {
    name: 'Mike',
    street_address: '102 E 92nd St',
    city: 'New York City',
    state: 'NY',
    zip: '10000'
  };

  var description = 'Kamilla Is Awesome';

  var payment_id = '12345';

  beforeEach(function(){
    sandbox = sinon.sandbox.create().usingPromise(Bluebird);
    sandbox.stub(braintree, 'makeSale').resolves({id: payment_id});
    sandbox.stub(lob, 'sendPostcard').resolves({ to: to, from: from, message: description });
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('creates postcards', function (done) {

    return request(app)
      .post('/api/postcards')
      .send({
        nonce: 'fake-paypal-one-time-nonce',
        to: to,
        from: from,
        message: 'Hey',
        email: 'fakey_faker@example.com'
      })
      .expect(201)
      .then(function(res){
        var postcard = res.body;
        postcard.to.name.should.eql(to.name);
        postcard.from.name.should.eql(from.name)
        should.exist(postcard._id);
      })
      .then(done.bind(null, null), done);     
  });

});