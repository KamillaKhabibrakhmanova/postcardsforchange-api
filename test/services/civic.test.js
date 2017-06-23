var  civic = require('../../services/civic.js');
var Bluebird = require('bluebird');
var should = require('should');

describe('Service: Civic (integration)', function() {

  it('gets representatives', function (done) {

    return civic.getNationalRepresentatives(addressData, {levels: 'country'})
    .then(function (res) {
      res.length.should.eql(5)
      res[0].name.should.eql('Donald J. Trump')

    })
    .then(done.bind(null, null), done);
  });
});

const addressData = '111 W 21st St, Apt 111, Huntington Station, NY, 11746';