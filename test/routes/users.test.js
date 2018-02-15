const app = require('../../app');

const User = require('../../models/user'),
	should = require('should');
	Bluebird = require('bluebird'),
	request = require('supertest');

const userData = {
  email: 'contact@postcardsforchange.net'
}

describe('Route: Users', function(){
	this.timeout(5000);
	
	it('does not create users without an email', function(){
        return request(app)
		.post('/api/users')
        .send({name: 'Kamilla'})
		.expect(400)
		.then(function (res) {
			return User.find({})
		})
        .then(function (res) {
            res.length.should.eql(0);
        });
	});

	it('creates new users', function(){
		return request(app)
		.post('/api/users')
        .send(userData)
		.expect(201)
		.then(function () {
			return User.find({})
		})
        .then(function (res) {
            res.length.should.eql(1);
            res[0].email.should.eql(userData.email)
        });
	});	
})

