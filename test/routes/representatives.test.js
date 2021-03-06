const app = require('../../app');

const _ = require('lodash'),
    should = require('should'),
    sinon = require('sinon'),
    civic = require('../../services/civic'),
    lob = require('../../services/lob'),
    request = require("supertest"),
    Bluebird = require('bluebird');
    buildUrl = require('build-url');
  
describe('Route: /representatives', function() {

  var sandbox;
  var addressQuery = '285 Fulton St, New York, NY 10007'
  
  beforeEach(function(){
    sandbox = sinon.sandbox.create().usingPromise(Bluebird);
    sandbox.stub(civic, 'getNationalRepresentatives').resolves([{id:'5'}]);
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('gets national representatives', function () {
    const url = buildUrl('/api/representatives', {
        queryParams: { address: addressQuery }
    })
    return request(app)
      .get(url)
      .expect(200)
      .then(function(res){
          res.body.length.should.eql(1);
          res.body[0].id.should.eql('5')
      });    
  });

  it('throws an error if no address provided', function () {

    return request(app)
      .get('/api/representatives')
      .expect(400);   
  });

});