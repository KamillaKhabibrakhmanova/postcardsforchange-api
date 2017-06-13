var User = require('../../models/user.js');
var should = require('should');
var Bluebird = require('bluebird')

describe('Model: User', function() {

  it('creates a user with an email', function (done) {

    return User.create({
      email: 'contact@postcardsforchange.net'
    })
    .then(function (newUser) {
        console.log('newUser', newUser)
      return User.findOne({
        email: 'info@postcardsforchange.net'
      })
    }).then(function(user){
      console.log('user', user)
    })
    .then(done.bind(null, null), done);
  });
});