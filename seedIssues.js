var Issue = require('./models/issue');

module.exports = function() {
	return Issue.insertMany([{
		title: 'No Ban',
		message: 'I am against this stupid ban',
		isSenate: true,
		isHouse: true,
		isActive: true,
		postcard_image: 'http://i.imgur.com/Df0vGvf.png'
	}, {
		title: 'No Wall',
		message: 'I am against this stupid wall',
		isSenate: true,
		isHouse: true,
		isActive: true,
		postcard_image: 'http://i.imgur.com/Df0vGvf.png'
	}, {
		title: 'Save Healthcare',
		message: 'I like having healthcare',
		isSenate: true,
		isHouse: true,
		isActive: true,
		postcard_image: 'http://i.imgur.com/Df0vGvf.png'
	}, {
		title: 'No Ban',
		message: 'I am against this stupid ban',
		isSenate: true,
		isHouse: true,
		isActive: true,
		postcard_image: 'http://i.imgur.com/Df0vGvf.png'
	}, {
		title: 'No Wall',
		message: 'I am against this stupid wall',
		isSenate: true,
		isHouse: true,
		isActive: true,
		postcard_image: 'http://i.imgur.com/Df0vGvf.png'
	}, {
		title: 'Save Healthcare',
		message: 'I like having healthcare',
		isSenate: true,
		isHouse: true,
		isActive: true,
		postcard_image: 'http://i.imgur.com/Df0vGvf.png'
	}])
	.then(function(res){
		console.log('res', res)
	})
};