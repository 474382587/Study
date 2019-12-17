/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var arr = s.split('')
    for(var i = 0; i < s.length; i++) {
        var char = arr[i]
        if((s.indexOf(char) === s.lastIndexOf(char)) && s.indexOfChar !== -1) return s.indexOf(char) 
    }
    return -1
};