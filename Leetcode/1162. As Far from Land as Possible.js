/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {

    const N = grid.length
    var lands = []



    // 找出所有的陆地
    for(var i = 0; i < N; i++) {
        for(var j = 0; j < N; j++) {
            if(grid[i][j] === 1) {
                lands.push({ i, j })
            }
        }
    }

    if(lands.length === 0 || lands.length === N * N) return -1

    var count = -1
    while(lands.length > 0) {
        count++
        let n = lands.length
        for(var k = 0; k < n; k++) {
            let {i,j} = lands.shift()

            // 遍历上方单元格
            if (i-1 >= 0 && grid[i-1][j] == 0) {
                grid[i-1][j] = 2;
                lands.push({i: i-1, j});
            }
            // 遍历下方单元格
            if (i+1 < N && grid[i+1][j] == 0) {
                grid[i+1][j] = 2;
                lands.push({i: i+1, j});
            }
            // 遍历左边单元格
            if (j-1 >= 0 && grid[i][j-1] == 0) {
                grid[i][j-1] = 2;
                lands.push({i, j: j-1});
            }
            // 遍历右边单元格
            if (j+1 < N && grid[i][j+1] == 0) {
                grid[i][j+1] = 2;
                lands.push({i, j: j+1});
            }
        }
    }
    

    return count
};