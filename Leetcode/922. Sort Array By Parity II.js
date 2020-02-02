/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var odd = []
    var even = []
    for(var i = 0; i < A.length; i++) {
        if((A[i] % 2) === 0) {
           even.push(A[i]) 
        } else {
            odd.push(A[i])
        }
    }
    
    var result = []
    for(var i = 0; i < odd.length; i++) {
        result.push(even[i])
        result.push(odd[i])
    }
    return result
};