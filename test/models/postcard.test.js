var Postcard = require('../../models/postcard.js');
var User = require('../../models/user.js');
var Issue = require('../../models/issue.js');
var braintree = require('../../services/braintree');
var mail = require('../../services/mail');
var lob = require('../../services/lob');
var should = require('should');
var sinon = require('sinon');
var Bluebird = require('bluebird')

describe('Model:Postcard', function() {
  console.log('test')

  let sandbox, issue;

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

  var description = 'Kamilla Is Awesome';

  var payment_id = '12345';
  let lobStub;

  beforeEach(function(done){
    sandbox = sinon.sandbox.create().usingPromise(Bluebird);
    sandbox.stub(braintree, 'makeSale').resolves({id: payment_id});
    sandbox.stub(braintree, 'processRefund').resolves({});
    sandbox.stub(mail, 'sendTemplateMessage').resolves({});
    lobStub = sandbox.stub(lob, 'sendIssuePostcard');

    return Issue.create({
      title: 'Fake title',
      message: 'Hi! Vacation is going great.',
      isActive: true,
    }).then(function(created){
      issue = created;
    })
    .then(done.bind(null, null), done);
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('sends multiple postcards', function () {
    console.log('HERE')
    lobStub.resolves({ id: 'lobId' });

    return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-none', user, representatives)
    .then(function(res){
      res.postcards.length.should.eql(5);
      const postcard = res.postcards[0];

      postcard.transactionId.should.eql(payment_id);
      postcard.lobId.should.eql('lobId');
      postcard.price.should.eql(1)
    })
  })

  it('only records sent postcards', function () {
    lobStub
    .onFirstCall().rejects(new Error('Failed to send'))
    .onSecondCall().rejects(new Error('Failed to send'))
    .resolves({id: 'lobId'})


    return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-none', user, representatives)
    .then(function(res){
      res.postcards.length.should.eql(3);
    });
  });

  it('records unsent postcards', function () {
    lobStub
    .onFirstCall().rejects(new Error('Failed to send'))
    .resolves({id: 'lobId'})


    return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-none', user, representatives)
    .then(function(res){
      res.postcards.length.should.eql(4);
      res.unsent.length.should.eql(1);

      res.unsent[0].should.deepEqual(representatives[0]);
    });
  });

  it('processes a refund if postcards are not send', function () {
    lobStub
    .onFirstCall().rejects(new Error('Failed to send'))
    .onSecondCall().rejects(new Error('Failed to send'))
    .resolves({id: 'lobId'})


    return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-none', user, representatives)
    .then(function(res){
      braintree.processRefund.callCount.should.eql(1);
      braintree.processRefund.args[0][0].should.eql(payment_id);
      braintree.processRefund.args[0][1].should.eql('2.00');
    });
  });

  it('collects a payment when sending postcards', function(){
    lobStub.resolves({id: 'lobId'});

    return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-none', user, representatives)
    .then(function(res){
      braintree.makeSale.callCount.should.eql(1);
      braintree.makeSale.args[0][0].should.eql(5);
      braintree.makeSale.args[0][1].should.eql('fake-paypal-onetime-none')
    });
  })

  it('creates a user after sending a postcard', function () {
    lobStub.resolves({id: 'lobId'});


    return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-nonce', user, representatives)
    .then(function () {
      return User.findOne({
        email: 'mickey@example.com'
      })
    }).then(function(user){
      user.firstName.should.eql('Mickey');
    });
  });

  it('sends a confirmation email after sending postcards', function () {
    lobStub.resolves({id: 'lobId'});

    return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-nonce', user, representatives)
    .then(function() {
      mail.sendTemplateMessage.callCount.should.eql(1);
      mail.sendTemplateMessage.args[0][1].should.eql('postcards-send-confirmation');
      mail.sendTemplateMessage.args[0][0].address.should.eql(user.email);
    });
  })

  it('updates a user after sending a postcards', function () {
    lobStub.resolves({id: 'lobId'});

    return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-none', user, representatives)
    .then(function () {
      return User.findOne({
        email: 'mickey@example.com'
      })
    }).then(function(user){
      user.firstName = 'Sally';
      return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-none', user, representatives)
    })
    .then(function () {
      return User.findOne({
        email: 'mickey@example.com'
      })
    }).then(function(user){
      user.firstName.should.eql('Sally');
    });
  });

  it('creates postcards after sending them', function(){
    lobStub.resolves({id: 'lobId'});

    return Postcard.sendPostcards(issue._id, 'fake-paypal-onetime-none', user, representatives)
    .then(function() {
      return Postcard.find({})
    })
    .then(function(postcards){
      postcards.length.should.eql(5);
      postcards[0].lobId.should.eql('lobId');
      postcards[0].price.should.eql(1);
      postcards[0].transactionId.should.eql(payment_id);
    });
  });

});

const representatives = [
  {
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
  },
  {
   "name": "Mike Pence",
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
   "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
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
     "id": "VP"
    }
   ]
  },
  {
   "name": "Charles E. Schumer",
   "address": [
    {
     "line1": "322 Hart Senate Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20510"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(202) 224-6542"
   ],
   "urls": [
    "http://www.schumer.senate.gov/"
   ],
   "photoUrl": "http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "chuckschumer"
    },
    {
     "type": "Twitter",
     "id": "SenSchumer"
    },
    {
     "type": "YouTube",
     "id": "SenatorSchumer"
    },
    {
     "type": "YouTube",
     "id": "ChuckSchumer"
    }
   ]
  },
  {
   "name": "Kirsten E. Gillibrand",
   "address": [
    {
     "line1": "478 Russell Senate Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20510"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(202) 224-4451"
   ],
   "urls": [
    "http://www.gillibrand.senate.gov/"
   ],
   "photoUrl": "http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "KirstenGillibrand"
    },
    {
     "type": "Twitter",
     "id": "SenGillibrand"
    },
    {
     "type": "YouTube",
     "id": "KirstenEGillibrand"
    }
   ]
  },
  {
   "name": "Thomas R. Suozzi",
   "address": [
    {
     "line1": "226 Cannon House Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20515"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(202) 225-3335"
   ],
   "urls": [
    "https://suozzi.house.gov/"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "RepTomSuozzi"
    },
    {
     "type": "Twitter",
     "id": "RepTomSuozzi"
    }
   ]
  }
 ]