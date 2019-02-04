// HTTP Request library
// import request from 'request'
const request = require('request')
const yargs = require('yargs')
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            desc: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h').argv

const encodedAddress = encodeURI(argv.address)
console.log(encodedAddress)
request(
    {
        url:
            'http://www.mapquestapi.com/geocoding/v1/address?key=agbYq8Qc12YtWPHLCvYv5uJAWDTaHUPQ&location=' +
            encodedAddress,
        json: true
    },
    (err, res, body) => {
        console.log(JSON.stringify(body.results, null, 4))
    }
)
