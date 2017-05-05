var lob = require('../../services/lob.js');

var should = require('should');

describe('Service: Lob (integration)', function() {

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

  it('sends a postcard', function (done) {

    return lob.sendPostcard(description, to, from)
    .then(function (info) {
      should.exist(info);
      info.carrier.should.eql('USPS');
      info.to.address_line1.should.eql(to.street_address);
      info.from.address_line1.should.eql(from.street_address);
      info.to.address_city.should.eql(to.city);
      info.from.address_city.should.eql(from.city);
      info.to.address_state.should.eql(to.state);
      info.from.address_state.should.eql(from.state);
      info.to.address_zip.should.eql(to.zip);
      info.from.address_zip.should.eql(from.zip);
    })
    .then(done.bind(null, null), done);
  });

});