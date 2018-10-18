const yargs = require('yargs');
const retrieve = require('./retrieve');
const weather = require('./weather');

const argv = yargs.options({
    adress: {
        demand: true,
        alias: 'a',
        describe: 'Address to fetch weather',
        string: true
    }
})
.help()
.argv;

retrieve.geocodeAdress(argv.adress, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.lat);
        //lat, lng, callback
        weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResults, undefined, 2));
            }
        });
    }
});

//lat, lng, callback
