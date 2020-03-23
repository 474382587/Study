/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    var hash = {}
    arr.sort((a, b) => a - b)
    for(let i = 0; i < arr.length; i++) {
        const regex = /0/g
        let ones = arr[i].toString(2).replace(regex, '').length
        // console.log(ones)
        if(hash[ones] === undefined) {
            hash[ones] = []
        } 
        hash[ones].push(arr[i])
    }
   
    var result = []
    for(let key in hash) {
        result.push(key)
    }
    result.sort((a, b) => a - b)
    
    var res = []
    for(var i =0; i < result.length; i++) {
        res = res.concat(hash[result[i]])
    }
    
    return res
    
};