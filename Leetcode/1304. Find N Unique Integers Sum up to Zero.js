/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    var result = []
    if((n % 2) === 0) {
        for(var i = 0; i < (n/2); i++) {
            result.push(i + 1)
            result.push(-i - 1)
        }
    } else {
        result.push(0)
        for(var i = 0; i < Math.floor(n/2); i++) {
            result.push(i + 1)
            result.push(-i - 1)
        }
    }
    console.log(result)
    return result
};