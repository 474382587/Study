const express = require('express')
const port = process.env.PORT || 3000

var app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Joseph'
        },
        {
            name: 'Mike'
        }
    ])
})

app.listen(port, function() {
    console.log('App starts at port ' + port)
})

module.exports.app = app
