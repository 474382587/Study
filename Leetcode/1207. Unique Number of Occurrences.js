/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var hash = {}
    for(var i = 0; i < arr.length; i++) {
        if(hash[arr[i]] === undefined) {
            hash[arr[i]] = 1
        } else {
            hash[arr[i]]++
        }
    }
    // console.log(hash)
    var hash2 = {}
    for(var key in hash) {
        if(hash2[hash[key]] === undefined) {
            hash2[hash[key]] = true
        } else {
            return false
        }
    }
    return true
};