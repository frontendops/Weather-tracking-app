// importing modules
const yargs = require('yargs');
const axios = require('axios');

//yargs is letting us add commands in the command line
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

const encodedAddress = encodeURIComponent(argv.adress);
let geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=1JBm8cNvVzAqCG1UetC8jWNQOuptUHpi&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    console.log(response.data);
}).catch((e) => {
    console.log(e);
});
