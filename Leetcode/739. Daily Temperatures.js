/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    var result = []
    for(var i = 0; i < T.length; i++) {
        for(var j = i + 1; j < T.length; j++) {
            if(T[j] > T[i]) {
                result.push(j - i)
                break
            }
            if(j === T.length - 1) {
                result.push(0)
            }
        }
    }
    result.push(0)
    return result
};