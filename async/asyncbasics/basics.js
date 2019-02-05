// HTTP Request library
// import request from 'request'
// const request = require('request')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')
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
        // console.log(JSON.stringify(results[0].locations[0].latLng, undefined, 2))
        weather.getWeather(
            results[0].locations[0].latLng.lat,
            results[0].locations[0].latLng.lng,
            function(err, result) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(JSON.stringify(result.temperature, undefined, 2))
                    console.log(JSON.stringify(result.apparentTemperature, undefined, 2))
                }
            }
        )
    }
})

// weather.getWeather(37.8267, -122.4233)
