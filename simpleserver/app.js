const fs = require('fs')
const os = require('os')

const data = require('./test.js')



// fs.appendFile('test.txt', 'I am 5 years old.', err => {
//     console.log(err)
// })


const userInfo = os.userInfo()
console.log(userInfo)

console.log(data.author.name)
data.logData()