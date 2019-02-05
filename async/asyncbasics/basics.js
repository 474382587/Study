// HTTP Request library
// import request from 'request'
// const request = require('request')
const geocode = require('./geocode/geocode')
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

// const encodedAddress = encodeURI(argv.address)
// console.log(encodedAddress)

geocode.geocodeAddress(argv.address, function(errMsg, results) {
    if (errMsg) {
        console.log(errMsg)
    } else {
        console.log(JSON.stringify(results, undefined, 2))
    }
})
