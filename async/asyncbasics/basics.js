// HTTP Request library
// import request from 'request'
const request = require('request')
const yargs = require('yargs')


request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=agbYq8Qc12YtWPHLCvYv5uJAWDTaHUPQ&location=1301%20lombard%20street%20philadelphia   ',
    json:true
}, (err, res, body) => {
    console.log(JSON.stringify(body.results, null, 4))
})