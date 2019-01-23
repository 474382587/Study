const express = require('express')

const app = express()

const port = process.env.PORT || 3030

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
app.get('/new', (req, res) => {
    res.send('<h1>New Hello World!</h1>')
})

app.listen(port, () => {
    console.log('Server Started! ' + port)
})
