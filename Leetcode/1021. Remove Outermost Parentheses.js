/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    var left = []
    var right = []
    var result = []
    var index = 0
    if(S.length === 0) return S
    for(var i = 0; i < S.length; i++) {
        if(S[i] === '(') {
            left.push(1)
        } else {
            right.push(1)
        }
        if(result[index] === undefined) {
            result[index] = ''
        }
        result[index] += S[i]
        if(left.length === right.length) {
            result[index] = result[index].substring(1, result[index].length - 1)
            index++
        }
    }
    // console.log(result)
    return result.join('')
};