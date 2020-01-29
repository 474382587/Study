/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.sort((a, b) => {
        return (a * a) - (b * b)
    }).map(e => {
        return e * e
    })
};