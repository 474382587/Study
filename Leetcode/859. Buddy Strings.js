/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {

    
    if(A.length !== B.length) return false
    
    if(A === B) {
        var hash = {}
        var result = false
        for(var i = 0; i < A.length; i++ ) {
            if(hash[A[i]]) {
                hash[A[i]]++
                if(hash[A[i]] > 1) return true
            } else {
                hash[A[i]] = 1
            }
        }
        return false
    } else {
        var diff = 0
        var hash = {}
        var ref 
        for(var i = 0; i < A.length; i++) {
            if(A[i] !== B[i]) {
                diff++
                hash[A[i]] = B[i]
                if(ref === undefined) ref = A[i]
                if(diff > 2) return false
            }
        }
        if(diff !== 2) return false
        if(hash[hash[ref]] !== ref) return false
        return true
    }
};