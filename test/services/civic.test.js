var  civic = require('../../services/civic.js');
var Bluebird = require('bluebird');
var should = require('should');

describe('Service: Civic (integration)', function() {
  this.timeout(10000);

  it('gets representatives', function () {

    return civic.getNationalRepresentatives(addressData, {levels: 'country'})
    .then(function (res) {
      res.length.should.eql(5)
      res[0].name.should.eql('Donald J. Trump')

    });
  });
});

const addressData = '111 W 21st St, Apt 111, Huntington Station, NY, 11746';