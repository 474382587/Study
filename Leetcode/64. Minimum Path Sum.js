// 64. Minimum Path Sum
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let arr = JSON.parse(JSON.stringify(grid));

    for (let i = 1; i < arr[0].length; i++) {
        arr[0][i] = arr[0][i - 1] + arr[0][i];
    }
    for (let i = 1; i < arr.length; i++) {
        arr[i][0] = arr[i - 1][0] + arr[i][0];
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[0].length; j++) {
            if (arr[i - 1][j] < arr[i][j - 1]) {
                arr[i][j] += arr[i - 1][j];
            } else {
                arr[i][j] += arr[i][j - 1];
            }
        }
    }
    return arr[arr.length - 1][arr[0].length - 1];
};


