var WeatherModel = Backbone.Model.extend({
    url: '',
    lat: '',
    long: '',
    defaults: {
        name: 'Unknown',
        wind: 'Unknown',
        main: 'Unknown'
    }
})
var weatherItem = new WeatherModel()

var WeatherView = Backbone.View.extend({
    el: '#weather',
    initialize: function() {
        this.render()
        this.listenTo(weatherItem, 'change', this.render)
    },
    my_template: _.template("<strong><%= name %></strong> (<%= (main.temp - 273).toFixed(2) + ' C' %>) - <%= 'wind: ' + wind.speed %>"),
    render: function() {
        console.log('here')
        // this.$el.html(weatherItem.get('name'))
        this.$el.html(this.my_template(weatherItem.toJSON()))
    }
})

var weatherView = new WeatherView()
var appid = '215022a8c6b45dcd36b354ca06acc261'

// https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22
function urlComposer(long, lat) {
    var base = 'https://api.openweathermap.org/data/2.5/weather?'
    var url = base + 'lat=' + lat + '&lon=' + long + '&appid=' + appid
    return url
}

if('geolocation' in navigator) {
	console.log('yes')
	navigator.geolocation.getCurrentPosition(function(res){
        weatherItem.set('long', res.coords.longitude.toFixed(2))
        weatherItem.set('lat', res.coords.latitude.toFixed(2))
        console.log(urlComposer(weatherItem.get('long'),weatherItem.get('lat')))
        weatherItem.url = urlComposer(weatherItem.get('long'),weatherItem.get('lat'))
        weatherItem.set('url', urlComposer(weatherItem.get('long'),weatherItem.get('lat')))
        weatherItem.fetch()
    })
}
