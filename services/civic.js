const googleKey = require('../config').googleApiKey;
const { URL, URLSearchParams } = require('url');
const request = require('request-promise-native');
const buildUrl = require('build-url');
const _ = require('lodash');
const geocoder = require('./geocoder');
const logger = require('../utils/logger').logger();

function getNewUrl() {
    return new URL(`https://www.googleapis.com/civicinfo/v2/representatives?key=${googleKey}`)
}

const representatives = function() {
    const url = 'https://www.googleapis.com/civicinfo/v2/representatives'

    const createUrl = function(address, query) {
        return buildUrl(url, {
            queryParams: _.merge({key: googleKey, address: address}, query)
        })
    }

    const getReps = function(address, query) {
        return request.get(createUrl(address, query))
        .then(function(res){
            res = JSON.parse(res);
            return res.officials;
        })
        .catch(function(err){
            logger.error('err', err)
            throw new Error(JSON.stringify(err))
        })
    }

    return {
        getNational: function(address, query) {
            return getReps(address, _.merge({levels: 'country'}, query))
        }
    }
};

const Reps = new representatives()

module.exports = {
    getNationalRepresentatives: Reps.getNational
}