const app = require('../../app');

const User = require('../../models/user'),
	should = require('should');
	Bluebird = require('bluebird'),
	request = require('supertest');

const userData = {
  email: 'contact@postcardsforchange.net'
}

describe.skip('Route: Users', function(){

	it('creates new users', function(done){
		return request(app)
		.post('/api/users')
        .send(userData)
		.expect(201)
		.then(function () {
			return User.find({})
		})
        .then(function (res) {
			console.log('res', res)
            res.length.should.eql(1);
            res[0].email.should.eql(userData.email)
        })
		.then(done.bind(null, null), done);
	});

	it('does not create users without an email', function(done){
        return request(app)
		.post('/api/users')
        .send({name: 'Kamilla'})
		.expect(400)
		.then(function (res) {
			return User.find({})
		})
        .then(function (res) {
            res.length.should.eql(0);
        })
		.then(done.bind(null, null), done);
	});

})

