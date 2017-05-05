var paypal = require('../../services/paypal.js');

var should = require('should');

describe.skip('Service: Paypal (integration)', function() {

  var to = {
    name: 'Kamilla',
    address_line1: '101 E 81st St',
    address_city: 'New York City',
    address_state: 'NY',
    address_zip: '10010'
  };

  var from = {
    name: 'Mike',
    address_line1: '102 E 92nd St',
    address_city: 'New York City',
    address_state: 'NY',
    address_zip: '10000'
  };

  var description = 'Kamilla Is Awesome';

  it('creates a payment', function (done) {

    return paypal.checkAndConfirm('12345')
    .then(function (info) {
      console.log('info', info)
    })
    .then(done.bind(null, null), done);
  });

});