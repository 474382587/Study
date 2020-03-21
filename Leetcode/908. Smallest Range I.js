/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    let min = A[0],
    max = A[0];

    for(let num of A){
        min = Math.min(min,num);
        max = Math.max(max,num);
    }

    return Math.max(0, (max-K) - (min+K) )
};