
const request = require('request');

let geocodeAdress = (adress, callback) => {
    let encodedAddress = encodeURIComponent(adress);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=1JBm8cNvVzAqCG1UetC8jWNQOuptUHpi&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('error not able to connect to servers');

        } else if (body.info.messages == 'Illegal argument from request: Insufficient info for location') {
            callback('unable to find this address');

        } else if (body.info.statuscode == 0) {
            callback(undefined, {
                address: body.results[0].locations[0].street,
                lat: body.results[0].locations[0].latLng.lat,
                lng: body.results[0].locations[0].latLng.lng
            });
        }

    })

}

module.exports.geocodeAdress = geocodeAdress;
