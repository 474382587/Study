const express = require('express')
const hbs = require('hbs')
const port = process.env.PORT || 3000
var app = express()

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})
hbs.registerHelper('screamIt', text => {
    return text.toUpperCase()
})

// app.use((req, res, next) => {
//     res.render('maintenance.hbs')

// })
app.set('view_engine', hbs)
console.log('dirname: ', __dirname)
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'This is Home Page!'
    })
})
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'Hello HBS Users!'
    })
})
app.get('/portfolio', (req,res) => {
    res.render('portfolio.hbs', {
        pageTitle:'Joseph\'s Portfolio Page'
    })
})

app.listen(port, () => {
    console.log('start at port ' + port)
})
