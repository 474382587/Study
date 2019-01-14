const babel = require('@babel/core')

const code = `
const sayHi = () => {
    console.log('Babel')
}

sayHi()
`


const options0bj = {

}

const result = babel.transform(code, options0bj)

console.log(result)