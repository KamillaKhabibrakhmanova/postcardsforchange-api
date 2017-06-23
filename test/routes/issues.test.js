const app = require('../../app');

const Issue = require('../../models/issue'),
	should = require('should');
	Bluebird = require('bluebird'),
	request = require('supertest');

const issueData = {
  title: 'No Ban',
  message: 'I am writing to express my opposition to the wall',
  postcard_image: 'http://www.fakeimage.com',
  isActive: true
}

const inactiveIssueData = {
  title: 'No Ban',
  message: 'I am writing to express my opposition to the wall',
  postcard_image: 'http://www.fakeimage.com'
}

describe('Route:Issue', function(){

	beforeEach(function(done){
		return Issue.create(issueData)
		.then(done.bind(null, null), done);
	});

	it('gets issues', function(done){
		return request(app)
		.get('/api/issues')
		.expect(200)
		.then(function(res){
			res.body.length.should.eql(1);

			const issue = res.body[0];
			console.log('issue', issue);
			issue.title.should.eql(issueData.title);
			issue.message.should.eql(issueData.message);
			issue.postcard_image.should.eql(issueData.postcard_image);
			issue.isSenate.should.eql(true);
			issue.isActive.should.eql(true);
			issue.isHouse.should.eql(true);
		})
		.then(done.bind(null, null), done);
	});

	it('ignores inactive issues', function(done){
		return Issue.create(inactiveIssueData)
		.then(function(){
			return request(app)
			.get('/api/issues')
			.expect(200)
		}).then(function(res){
			res.body.length.should.eql(1);
		})
		.then(done.bind(null, null), done);
	});

})

