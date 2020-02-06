/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    for(var i = 1; i < A.length; i++) {
        if(A[i] < A[i-1]) {
            return i - 1
        }
    }
};
