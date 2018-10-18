const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
    url:`https://api.darksky.net/forecast/b15d3bac721113ff67f56efcf47d9e3f/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        callback(`The current temperature is ${body.currently.temperature} with winds of ${body.currently.windSpeed}mph`);
    } else {
        callback('unable to fetch weather');
    }
});
};

module.exports.getWeather = getWeather;
