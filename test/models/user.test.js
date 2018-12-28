var User = require('../../models/user.js');
var should = require('should');
var Bluebird = require('bluebird')

describe('Model: User', function() {

  it('creates a user with an email', function () {

    return User.create({
      email: 'contact@postcardsforchange.net'
    })
    .then(function (newUser) {
      return User.findOne({
        email: 'contact@postcardsforchange.net'
      })
    }).then(function(user){
      should.exist(user);
    });
  });
});