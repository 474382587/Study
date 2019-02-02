// import { resolve } from 'dns'

var axios = axios

// console.log(axios)

// async function getListItem() {
//     return new Promise(resolve => {
// axios
//     .get(
//         'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html'
//     )
//             .then(res => {
//                 resolve(res)
//             })
//     })
// }

// function getList() {
//     console.log('async')
//     var a = await getListItem()
//     console.log(a)
// }

// getList()

// function resolveAfter2Seconds() {
//     return axios.get(
//         'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html'
//     )
// }
// var arr = []
// async function asyncCall() {
//     console.log('calling')
//     var result = await resolveAfter2Seconds()
//     console.log(result)
//     // expected output: 'resolved'
// }

// for(var i=0; i<5; i++) {
//     asyncCall()
// }

var $ = $

var dfd = $.Deferred()
console.log(dfd)

var arr = []

dfd.promise()

console.log(dfd)

// recursive function
function getList(index) {
    console.log('end Now ', index)
    console.log(index)
    if(index === 100) {
        console.log('end Now')
        console.table(arr)
        dfd.resolve(arr)
        return
    }
    console.log(index)
    axios.get('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html').then(res => {
        arr.push(res.data)
        console.log('time is: ', new Date().getTime())
        getList(index + 1)
    })
}

dfd.then(function(e) {

    console.log(e)
})