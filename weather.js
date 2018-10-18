const request = require('request');
request({
    url:`https://api.darksky.net/forecast/b15d3bac721113ff67f56efcf47d9e3f/34.919844,-82.301663`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.tempurature);
    } else {
        console.log('unable to fetch weather');
    }
});
