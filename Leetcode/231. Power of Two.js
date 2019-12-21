/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n < 2) {
        return n === 1
    } else {
        return isPowerOfTwo(n / 2)
    }
}
