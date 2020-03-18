/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    
    let row = []
    let col = []
    let result = []
    for(let i = 0; i < matrix.length; i++) {
        var rowMax = undefined
        for(let j = 0; j < matrix[0].length; j++) {
            if(rowMax !== undefined) {
                rowMax = Math.min(rowMax, matrix[i][j])
            } else {
                rowMax = matrix[i][j]
            }
            if(col[j] !== undefined) {
                col[j] = Math.max(col[j], matrix[i][j])
            } else {
                col.push(matrix[i][j])
            }
        }
        row.push(rowMax)
    }
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            
            let cur = matrix[i][j]
            if(cur === row[i] && cur === col[j]) {
                result.push(cur)
            }
        }
    }
    return result
};
