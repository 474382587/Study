var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer')

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    // res.send('<h1>Hello World!</h1>')
    res.render('index')
})

app.listen(3000)
console.log('Express server running on port 3000')
