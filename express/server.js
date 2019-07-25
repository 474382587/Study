const express = require('express')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const port = process.env.PORT || 3030

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
app.get('/new', (req, res) => {
    res.send('<h1>New Hello World!</h1>')
})

app.post('/post', (req, res) => {
    var a = req.body
    console.log(a)
    res.send('Hello World')
})


app.listen(port, () => {
    console.log('Server Started! ' + port)
})
