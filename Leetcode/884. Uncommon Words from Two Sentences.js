/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var arr = A.concat(' ').concat(B).split(' ')
    var hash = {}
    for(var i = 0; i < arr.length; i++) {
        if(hash[arr[i]] === undefined) {
            hash[arr[i]] = 1
        } else {
            hash[arr[i]]++
        }
    }
    arr =  arr.filter(e => {
        return hash[e] === 1
    })
    return arr
};