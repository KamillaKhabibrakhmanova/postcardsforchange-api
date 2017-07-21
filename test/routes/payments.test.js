const app = require('../../app');

const _ = require('lodash'),
    should = require('should'),
    sinon = require('sinon'),
    braintree = require('../../services/braintree'),
    request = require("supertest"),
    Bluebird = require('bluebird');
  
describe('Route: /payments', function() {

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
    sandbox.stub(braintree, 'generateToken').resolves({success: true, clientToken: 'fakeToken'});
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('generates client tokens', function (done) {

    return request(app)
      .get('/api/payments/client-token')
      .expect(200)
      .then(function(res){
        var clientToken = res.body;
        clientToken.clientToken.should.eql('fakeToken');
      })
      .then(done.bind(null, null), done);     
  });

});