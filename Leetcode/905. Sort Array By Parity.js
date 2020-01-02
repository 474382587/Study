/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var odd = []
    var even = []
    
    
    for(var i = 0; i < A.length; i++) {
        if((A[i] % 2) === 0) {
            even.push(A[i])
        } else {
            odd.push(A[i])
        }
    }
    
    return even.concat(odd)
    
};
