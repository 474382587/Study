/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(var i = 0; i < A.length; i++) {
        var length = A[i].length
        var row = A[i]
        row = row.reverse()
        for(var j = 0; j < length; j++) {
            if(row[j] === 0) {
                row[j] = 1
            } else {
                row[j] = 0
            }
        }
        
    }
    return A
};