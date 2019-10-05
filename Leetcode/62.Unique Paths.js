/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let arr = [];
    // First Col and Row
    for (let i = 0; i < n; i++) {
        arr.push([1]);
    }
    for (let i = 0; i < m - 1; i++) {
        arr[0].push(1);
    }
    console.log(arr)
    
    
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            arr[i][j] = arr[i][j-1] + arr[i-1][j]
        }
    }
    console.log(arr)
    return arr[n-1][m-1]
};
