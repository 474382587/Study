const request = require('request')
var geocodeAddress = (address, callback) => {
    var address = encodeURI(address)
    request(
        {
            url:
                'http://www.mapquestapi.com/geocoding/v1/address?key=agbYq8Qc12YtWPHLCvYv5uJAWDTaHUPQ&location=' +
                address,
            json: true
        },
        (err, res, body) => {
            if (err) {
                callback(err)
                // console.log(err)
            } else if (body.info.statuscode === 400) {
                callback('unable to find address')
                // console.log('unable to find address')
            } else if (body.info.statuscode === 0) {
                callback('', body.results)
                // console.log(JSON.stringify(body.results, null, 4))
            } else {
                callback('unexpected error occured!')
                // console.log('unexpected error occured!')
            }
        }
    )
}

module.exports = {
    geocodeAddress
}


// https://api.darksky.net/forecast/[key]/[latitude],[longitude]