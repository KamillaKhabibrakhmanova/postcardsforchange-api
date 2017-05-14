const geocoder = require('../../services/geocoder');
const Bluebird = require('bluebird');
const should = require('should');

describe('Service: Geocoder (integration)', function() {
  this.timeout(10000);

  it('converts an address object to a string format', function(){
    var addressString = geocoder.toAddressString(addressData);
    addressString.should.eql('111 W 21st St, Apt 111, Huntington Station, NY, 11746');
  });

  it('looks up coordinates for an address', function (done) {
    return geocoder.getCoordinates(addressData)
    .then(function (res) {
      res.lat.should.eql(40.83381);
      res.lng.should.eql(-73.41933);
    })
    .then(done.bind(null, null), done);
  });

});

const addressData = {
  street1: '111 W 21st St',
  street2: 'Apt 111',
  city: 'Huntington Station',
  state: 'NY',
  zip: '11746'
};