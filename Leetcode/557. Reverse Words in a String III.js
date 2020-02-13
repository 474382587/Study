/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arr = s.split(' ')
    arr = arr.map(word => {
        return word.split('').reverse().join("")
    })
    return arr.join(' ')
};