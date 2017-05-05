var config = require('../config');
var request = require('request');
var Bluebird = require('bluebird');
var rp = require('request-promise');

var go_to_point = function(pt) {
    var lat = pt[1];
    var lng = pt[0];
    var array = [];
    return latlng_to_district(lat, lng, function(district) {
        if (!district) {
            console.log("That location does not seem to be in a United States Congressional District.");
            return;
        } else if (district.number != "00" || 1) {
            array.push(district.state);
            array.push(district.number);
            console.log(array)
            return array;
        } else {
            array.push(district.state);
            array.push(district.number);
            return array;
        }
    });
}
var latlng_to_district = function(lat, lng, callback) {
    request('https://api.mapbox.com/v4/' + config.mapboxMapId + '/tilequery/' + lng + ',' + lat + '.json?radius=0&access_token=' + config.mapboxApiMapKey,
        function(err, resp, body) {
            var response = JSON.parse(resp.body)
            if (response.type == "FeatureCollection" && response.features.length > 0) {
                callback(response.features[0].properties);
                // return;
            } else {
                callback(null)
            };
        }
    );
}

module.exports = {
    getRepByAddress: function(address, callback) {
        rp('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?country=us&access_token=' + config.mapboxApiMapKey)
            .then(function(body) {
              console.log('body', body)
                body = JSON.parse(body)
                if (body.type == "FeatureCollection" && body.features.length > 0) {
                    var lat = body.features[0].center[1];
                    var lng = body.features[0].center[0];
                    var arr = []
                    rp('https://api.mapbox.com/v4/' + config.mapboxMapId + '/tilequery/' + lng + ',' + lat + '.json?radius=0&access_token=' + config.mapboxApiMapKey)
                        .then(function(body) {
                          console.log('second body', body)
                            var response = JSON.parse(body)
                            if (response.type == "FeatureCollection" && response.features.length > 0) {
                                var district = response.features[0].properties;
                                if (!district) {
                                    console.log("That location does not seem to be in a United States Congressional District.");
                                    return;
                                } else if (district.number != "00" || 1) {
                                    arr.push(district.state);
                                    arr.push(district.number);
                                    console.log(arr)
                                    callback(arr);
                                } else {
                                    arr.push(district.state);
                                    arr.push(district.number);
                                    callback(arr);
                                }
                            } else {
                                callback(null)
                            };
                        })
                        .catch(function(err) {
                            console.log(err)
                            throw err
                        });
                }
            })
            .catch(function(err) {
                console.log(err)
                throw err
            });
    },
    addressToLatLng: function(address, callback) {
        request('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?country=us&access_token=' + config.mapboxApiMapKey,
            function(err, resp, body) {
                console.log(body)
                body = JSON.parse(body)
                if (body.type == "FeatureCollection" && body.features.length > 0) {
                    var getReps = Bluebird.promisify(go_to_point);
                    return getReps(body.features[0].center).then(function(reps) {
                        console.log(reps)
                        return reps
                    })
                } else {
                    console.log("Could not find that address.")
                };
            }
        );
    },
 abbrState: function(input, to){
    
    var states = [
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}
}
