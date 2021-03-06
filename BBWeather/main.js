var WeatherModel = Backbone.Model.extend({
    url: '',
    lat: '',
    long: '',
    defaults: {
        res: {
            main: {},
            weather: {
                0: ''
            },
            wind: {}
        }
    },
    parse: function(res) {
        return {
            res: res
        };
    }
});
var ForecastModel = Backbone.Model.extend({
    url: '',
    defaults: {
        res: {}
    },
    idAttribute: 'id'
});
var forecastModel = new ForecastModel();
var ForecastList = Backbone.Collection.extend({
    url: '',
    model: ForecastModel,
    parse: function(res) {
        return res.list;
    }
});
var forecastList = new ForecastList();
var weatherItem = new WeatherModel();

var WeatherView = Backbone.View.extend({
    el: '#weather',
    events: {
        'click button': 'handleClick'
    },
    handleClick: function() {
        console.log('button');
        forecastModel.url = urlComposerForecast(
            weatherItem.get('lat'),
            weatherItem.get('long')
        );
        forecastList.url = urlComposerForecast(
            weatherItem.get('lat'),
            weatherItem.get('long')
        );
        console.log(forecastModel);
        // forecastModel.fetch()
        forecastList.fetch({
            success: function() {
                forecastList.reset(forecastList.models);
            }
        });
    },
    initialize: function() {
        this.render();
        this.listenTo(weatherItem, 'change', this.render);
        //dont wanna trugger 3 times
        this.listenTo(forecastList, 'reset', this.forecastView);
    },
    forecastView: function() {
        var that = this;
        console.log('forecast');
        console.log(forecastList.models);
        forecastList.each(function(e, index) {
            that.$el.append(
                '<div>' +
                    (index + 1) +
                    ' day from now - ' +
                    e.get('weather')[0].main +
                    '</div>'
            );
        });
    },
    my_template: _.template(
        "<div><strong><%= res.name %></strong> (<%= (res.main.temp - 273).toFixed(2) + ' C' %>) - <%= 'wind: ' + res.wind.speed %></div><div><%= res.weather[0].main %><br><%= res.weather[0].description %></div><button> 3 Days Forecast </button>"
    ),
    render: function() {
        console.log('here');
        // this.$el.html(weatherItem.get('name'))
        this.$el.html(this.my_template(weatherItem.toJSON()));
    }
});

var weatherView = new WeatherView();
var appid = '215022a8c6b45dcd36b354ca06acc261';

// https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22
function urlComposer(long, lat) {
    var base = 'https://api.openweathermap.org/data/2.5/weather?';
    var url = base + 'lat=' + lat + '&lon=' + long + '&appid=' + appid;
    return url;
}

function urlComposerForecast(lat, long) {
    var base = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=';
    var url = base + lat + '&lon=' + long + '&cnt=3&appid=' + appid;
    return url;
}

if ('geolocation' in navigator) {
    console.log('yes');
    navigator.geolocation.getCurrentPosition(function(res) {
        weatherItem.set('long', res.coords.longitude.toFixed(2));
        weatherItem.set('lat', res.coords.latitude.toFixed(2));
        console.log(
            urlComposer(weatherItem.get('long'), weatherItem.get('lat'))
        );
        weatherItem.url = urlComposer(
            weatherItem.get('long'),
            weatherItem.get('lat')
        );
        weatherItem.set(
            'url',
            urlComposer(weatherItem.get('long'), weatherItem.get('lat'))
        );
        weatherItem.fetch({
            success: function(res) {
                console.log(res, 'hihihi');
            }
        });
    });
}
