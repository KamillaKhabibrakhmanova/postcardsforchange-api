var Topic = require('./models/topic');
var Congress = require('./models/congress');
var Trump = require('./models/trump');
var Senate = require('./models/senate')
var topicsFile = require('./topics.js');
var congressFile = require('./congress.js');
var trumpsFile = require('./trumps.js');
var senateFile = require('./senators.js');

var seed = {
    seedTopics : function(topic) {
        Topic.remove({}, function(err, response, next) {
            if (err) next(err);
            Topic.create({
                title: topic.title,
                description: topic.description,
                link: topic.link,
                src: topic.src,
                messages: topic.messages,
                selected: false                
            }, function(err, completed_topic) {
                if(err) {
                    console.log(err);
                    throw err;
                } else {
                    completed_topic.save();
                }
            });
        });
        
    },
	parseTopics : function(topics) {
		for (var i = 0; i < topics.length; i++) {
			this.seedTopics(topics[i]);
			}
	},
    seedTrumps : function(trump) {
        Trump.remove({}, function(err, response, next) {
            if (err) next(err);
            Trump.create({
                title: trump.title,
                first_name: trump.first_name,
                last_name: trump.last_name,
                photo_src: trump.photo_src,
                postcards_sent: 0,
                address: trump.address,
                selected: false,
                order: trump.order                
            }, function(err, completed_trump) {
                if(err) {
                    console.log(err);
                    throw err;
                } else {
                    completed_trump.save();
                }
            });
        });
        
    },
    parseTrumps : function(trumps) {
        for (var i = 0; i < trumps.length; i++) {
            this.seedTrumps(trumps[i]);
            }
    },
    seedCongress : function(congress) {
        Congress.remove({}, function(err, response, next) {
            if (err) next(err);
            Congress.create({
                    first_name: congress.first_name,
                    last_name: congress.last_name,
                    middle_name: congress.middle_name || '',
                    suffix: congress.suffix || '',
                    street_address: congress.street_address,
                    city: congress.city,
                    zip: congress.zip,
                    state: 'DC',
                    home_state: congress.home_state,
                    party: congress.party,
                    district: congress.district,
                    postcards: 0
            }, function(err, completed_congress) {
                if(err) {
                    console.log(err);
                    throw err;
                } else {
                    completed_congress.save();
                }
            });
        });
        
    },
    parseCongress : function(congresser) {
        for (var i = 0; i < congresser.length; i++) {
            this.seedCongress(congresser[i]);
            }
    },
    seedSenate : function(senate) {
        Senate.remove({}, function(err, response, next) {
            if (err) next(err);
            Senate.create({
                    first_name: senate.first_name,
                    last_name: senate.last_name,
                    street_address: senate.address,
                    city: 'Washington',
                    zip: '20510',
                    state: 'DC',
                    home_state: senate.state,
                    party: senate.party,
                    postcards: 0
            }, function(err, completed_senate) {
                if(err) {
                    console.log(err);
                    throw err;
                } else {
                    completed_senate.save();
                }
            });
        });
        
    },
    parseSenate : function(senator) {
        for (var i = 0; i < senator.length; i++) {
            this.seedSenate(senator[i]);
            }
    }
};

// seed.parseTopics(topicsFile);
// seed.parseCongress(congressFile);
// seed.parseTrumps(trumpsFile);
// seed.parseSenate(senateFile);
module.exports = seed;
