/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    
    // create 2D array
    var arr = []
    for(var i = 0; i < n; i++) {
        var col = []
        for(var j = 0; j < m; j++) {
            col.push(0)
        }
        arr.push(col)
    }
    
    for(var i = 0; i < indices.length; i++) {
        rowAdd(indices[i][0], arr)
        colAdd(indices[i][1], arr)
    }
    
    var count = 0
    
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[0].length; j++) {
            if((arr[i][j] % 2) !== 0) {
                count++
            }
        }
    }
    return count
    // console.log(arr)
};

function rowAdd(n, arr) {
    // console.log(arr, ' + ',  n)
    var row = arr[n]
    // console.log(row)
    for(var i = 0; i < row.length; i++) {
        arr[n][i]++
    }
}

function colAdd(n, arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i][n]++
    }
}
