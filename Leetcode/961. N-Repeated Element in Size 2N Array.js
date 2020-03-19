/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let hash = {}
    for(let i = 0; i < A.length; i++) {
        if(hash[A[i]] === undefined) {
            hash[A[i]] = 1
        } else {
            hash[A[i]]++
            if(hash[A[i]] >= (A.length / 2)) {
                return A[i]
            }
        }
    }
};