const app = require('../../app');

const _ = require('lodash'),
    should = require('should'),
    sinon = require('sinon'),
    braintree = require('../../services/braintree'),
    lob = require('../../services/lob'),
    Issue = require('../../models/issue'),
    request = require("supertest"),
    Bluebird = require('bluebird');
  
describe('Route: /postcards', function() {

  let sandbox, issue, lobStub;

  const payment_id = '12345';

  beforeEach(function(){
    sandbox = sinon.sandbox.create().usingPromise(Bluebird);
    sandbox.stub(braintree, 'makeSale').resolves({id: payment_id});
    sandbox.stub(braintree, 'processRefund').resolves({});
    lobStub = sandbox.stub(lob, 'sendIssuePostcard');

    return Issue.create({
      title: 'Fake title',
      message: 'Hi! Vacation is going great.',
      isActive: true,
    }).then(function(created){
      issue = created;
    });
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('creates postcards', function () {
    lobStub.resolves({id: 'lobId'})

    return request(app)
      .post('/api/postcards')
      .send({
        nonce: 'fake-paypal-one-time-nonce',
        issueId: issue._id,
        representatives,
        user
      })
      .expect(201)
      .then(function(res){
        res.body.postcards.length.should.eql(1);
        res.body.postcards[0].lobId.should.eql('lobId');
      });   
  });

  it('should return a 500 status code and unsent array if no postcards are sent', function(){
    lobStub.rejects(new Error('Error sending postcard'));

    return request(app)
    .post('/api/postcards')
    .send({
      nonce: 'fake-paypal-one-time-nonce',
      issueId: issue._id,
      representatives,
      user
    })
    .expect(500)
    .then(function(res){
      const result = res.body;
      result.errorMessage = 'Failed to send 1 postcards';
      result.postcards.length.should.eql(0);
      result.unsent.length.should.eql(1);
      result.unsent[0].should.deepEqual(representatives[0]);
    });
  })
});

const user = {
  firstName: 'Mickey',
  lastName: 'Mouse',
  email: 'mickey@example.com',
  address: {
    line1: '143 Magic Lane',
    city: 'Disneyland',
    state: 'CA',
    zip: '10010'
  }
}

const representatives = [{
   "name": "Donald J. Trump",
   "address": [
    {
     "line1": "The White House",
     "line2": "1600 Pennsylvania Avenue NW",
     "city": "Washington",
     "state": "DC",
     "zip": "20500"
    }
   ],
   "party": "Republican",
   "phones": [
    "(202) 456-1111"
   ],
   "urls": [
    "http://www.whitehouse.gov/"
   ],
   "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
   "channels": [
    {
     "type": "GooglePlus",
     "id": "+whitehouse"
    },
    {
     "type": "Facebook",
     "id": "whitehouse"
    },
    {
     "type": "Twitter",
     "id": "potus"
    },
    {
     "type": "YouTube",
     "id": "whitehouse"
    }
   ]
  }]