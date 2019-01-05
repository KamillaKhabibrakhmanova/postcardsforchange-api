var lob = require('../../services/lob.js');
var Issue = require('../../models/issue');
var Bluebird = require('bluebird');

var should = require('should');

describe('Service: Lob (integration)', function() {
  this.timeout(20000);

  var from = {
    name: 'Mickey Mouse',
    line1: '143 Magic Lane',
    city: 'Disneyland',
    state: 'CA',
    zip: '10010'
  };

  it('sends issue postcards', function(){
    return Issue.create({
      title: 'Fake title',
      message: 'Hey hey please pass this bill',
      isActive: true,
      postcardImage: 'https://s3.amazonaws.com/postcards4change/healthcare+postcards-05.jpg'
    })
    .then(function(issue){
      return lob.sendIssuePostcard(issue, representative, from)
    }).then(function(info){
      should.exist(info);
      info.carrier.should.eql('USPS');
      info.to.address_line1.should.eql(representative.address[0].line1.toUpperCase());
      info.from.address_line1.should.eql(from.line1.toUpperCase());
      info.to.address_city.should.eql(representative.address[0].city.toUpperCase());
      info.from.address_city.should.eql(from.city.toUpperCase());
      info.to.address_state.should.eql(representative.address[0].state);
      info.from.address_state.should.eql(from.state);
      info.to.address_zip.should.eql(representative.address[0].zip);
      info.from.address_zip.should.eql(from.zip);
    });
  });

});

const representative = {
   "name": "Donald J. Trump",
   "address": [
    {
     "line1": "THE WHITE HOUSE",
    //  "line2": "1600 Pennsylvania Avenue NW",
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
  };