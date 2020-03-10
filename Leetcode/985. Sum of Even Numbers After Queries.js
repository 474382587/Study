/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    
    let result = 0
    for(var i = 0; i < A.length; i++) {
        if((A[i] % 2) === 0) {
            result += A[i]
        }
    }

    var arr = []
    for(var i = 0; i < queries.length; i++) {
        let index = queries[i][1]
        let value = queries[i][0]
        
        let old = A[index]
        let newVal = A[index] + value
        
        if((old % 2) === 0) {
            if((newVal % 2) === 0) {
                result += value
            } else {
                result -= old
            }
        } else {
            if((newVal % 2) === 0) {
                result += newVal
            }
        }
        A[index] = newVal
        arr.push(result)
    }
    return arr
};