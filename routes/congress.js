'use strict';

var express = require('express');
var app = express();
var Bluebird = require('bluebird');
var Congress = Bluebird.promisifyAll(require('../models/congress'));
var Senator = Bluebird.promisifyAll(require('../models/senate'));
var getReps = require('../services/get-congress');


app.post('/congress', function(req, res) {
	var results = [];
	console.log('cheese', req.body)
	var state = getReps.abbrState(req.body.address.state, 'abbr');
    // if (req.body.state === 'AK' || 'MT' || 'WY' || 'ND' || 'SD' || 'VT' || 'DE') {
    //     Congress.findOne({ home_state: req.body.state },
    //         function(err, congressperson) {
    //             console.log(congressperson)
    //             results.push(congressperson);
	   //          return Senator.find({ home_state: req.body.state })
	   //                      .then(function(senators) {
	   //                          console.log(senators)
	   //                          results.push(senators[0]).push(senators[1])
	   //                          res.send(results);
	   //                      });
	   //              })
    // } else {
    	var address = req.body.address.formatted_address;
        console.log('address', address);
        getReps.getRepByAddress(address, function(array) {
            return Congress.findOne({ $and: [{ home_state: array[0] }, { district: array[1] }] })
                .then(function(congressperson) {
                    console.log('congressman', congressperson);
                    results.push(congressperson);
                    return Senator.find({ home_state: state})
                        .then(function(senators) {
                        	console.log('senators', senators)
                          	results.push(senators[0])
                          	results.push(senators[1])
                          	console.log(results);
                            res.send(results);
                        });
                })

        });
    // }
});

module.exports = app;
