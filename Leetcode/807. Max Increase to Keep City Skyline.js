/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    var hori = []
    var vert = []
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j <grid[0].length; j++) {
            vert[i] = vert[i] ? vert[i] : 0
            if(vert[i] < grid[i][j]) {
                vert[i] = grid[i][j]
            }
            hori[j] = hori[j] ? hori[j] : 0
            if(hori[j] < grid[i][j]) {
                hori[j] = grid[i][j]
            }
        }
    }
    // console.log(hori)
    // console.log(vert)
     var arr = grid.slice(0)
     var count = 0
    // console.log(grid
    for(var i = 0; i < arr.length; i++) {
        // row
        for(var j = 0; j <arr[0].length; j++) {
            // col
            let min = Math.min(vert[i], hori[j])
            count += (min - arr[i][j])
        }
    }
    return count
};