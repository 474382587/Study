/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    if (m === 0 && n === 0) {
        return 0;
    }
    if (obstacleGrid[0][0] === 1) return 0;

    if (m === 1) {
        return obstacleGrid[0].includes(1) ? 0 : 1;
    }
    if (n === 1) {
        let arr = obstacleGrid.map(e => {
            return e[0];
        });
        console.log(arr);
        return arr.includes(1) ? 0 : 1;
    }

    for (let i = 0; i < m; i++) {
        if (i === 0) {
            obstacleGrid[i][0] = obstacleGrid[i][0] === 1 ? 0 : 1;
        } else {
            obstacleGrid[i][0] =
                obstacleGrid[i - 1][0] === 0
                    ? 0
                    : obstacleGrid[i][0] === 1
                    ? 0
                    : 1;
        }
    }
    for (let i = 1; i < n; i++) {
        obstacleGrid[0][i] =
            obstacleGrid[0][i - 1] === 0 ? 0 : obstacleGrid[0][i] === 1 ? 0 : 1;
    }

    console.log(obstacleGrid);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j - 1] === 0 && obstacleGrid[i - 1][j] === 0) {
                obstacleGrid[i][j] = 0;
            } else {
                if (obstacleGrid[i][j] === 1) {
                    obstacleGrid[i][j] = 0;
                    continue;
                } else {
                    obstacleGrid[i][j] =
                        obstacleGrid[i][j - 1] + obstacleGrid[i - 1][j];
                }
            }
        }
    }
    console.log(obstacleGrid);
    console.log(obstacleGrid[m - 1][n - 1]);
    return obstacleGrid[m - 1][n - 1];
};
