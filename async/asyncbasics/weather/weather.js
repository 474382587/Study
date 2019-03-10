const request = require('request');
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

var getWeather = function(lat, long, callback) {
    // 37.8267,-122.4233

    request(
        {
            url:
                'https://api.darksky.net/forecast/20e24b8a753f51d0504ec06249f7e215/' +
                lat +
                ',' +
                long,
            json: true
        },
        (err, res, body) => {
            if (err) {
                // console.log(err)
                callback(err);
            } else if (res.statusCode === 400) {
                // console.log('unable to fetch weather')
                callback('unable to fetch weather');
            } else {
                callback('', {
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
                // console.log(
                //     JSON.stringify(body.currently.temperature, undefined, 2)
                // )
            }
        }
    );
};

module.exports = {
    getWeather
};
