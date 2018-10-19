const request = require('request');

let geocodeAdress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=1JBm8cNvVzAqCG1UetC8jWNQOuptUHpi&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('error not able to connect to servers');

            } else if (body.info.messages == 'Illegal argument from request: Insufficient info for location') {
                reject('unable to find this address');

            } else if (body.info.statuscode == 0) {
                resolve({
                    address: body.results[0].locations[0].street,
                    lat: body.results[0].locations[0].latLng.lat,
                    lng: body.results[0].locations[0].latLng.lng
                });
            }

        });

    });
};

geocodeAdress('326 rivers edge circle sc').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
