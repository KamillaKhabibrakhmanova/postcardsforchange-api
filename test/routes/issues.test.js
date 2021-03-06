const app = require('../../app');

const Issue = require('../../models/issue'),
	should = require('should');
	Bluebird = require('bluebird'),
	request = require('supertest');

const issueData = {
  title: 'No Ban',
  message: 'I am writing to express my opposition to the wall',
  postcardImage: 'http://www.fakeimage.com',
  isActive: true
}

const inactiveIssueData = {
  title: 'No Ban',
  message: 'I am writing to express my opposition to the wall',
  postcardImage: 'http://www.fakeimage.com'
}

describe('Route:Issue', function(){

	beforeEach(function(){
		return Issue.create(issueData)
	});

	it('gets issues', function(){
		return request(app)
		.get('/api/issues')
		.expect(200)
		.then(function(res){
			res.body.length.should.eql(1);

			const issue = res.body[0];
			issue.title.should.eql(issueData.title);
			issue.message.should.eql(issueData.message);
			issue.postcardImage.should.eql(issueData.postcardImage);
			issue.isSenate.should.eql(true);
			issue.isActive.should.eql(true);
			issue.isHouse.should.eql(true);
		});
	});

	it('ignores inactive issues', function(){
		return Issue.create(inactiveIssueData)
		.then(function(){
			return request(app)
			.get('/api/issues')
			.expect(200)
		}).then(function(res){
			res.body.length.should.eql(1);
		});
	});

})

