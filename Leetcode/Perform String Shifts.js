/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
    var hash = {
        left: 0,
        right: 0
    }
    for (let op of shift) {
        if (op[0] === 1) {
            hash.right += op[1]
        } else {
            hash.left += op[1]
        }
    }
    console.log((hash.right - hash.left) % s.length)
    var finalOp = ((hash.right - hash.left) % s.length) >= 0 ? ((hash.right - hash.left) % s.length) : s.length + ((hash.right - hash.left) % s.length)

    console.log(finalOp)
    return s.substr(s.length - finalOp, s.length) + s.substr(0, s.length - finalOp)

};