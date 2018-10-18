const yargs = require('yargs');
const retrieve = require('./retrieve');

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
        console.log(JSON.stringify(results, undefined, 2));
    }
});
