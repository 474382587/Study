/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    if (!grid || grid.length === 0 || grid[0].length === 0) {
      return 0
    }
  
    let visited = []
    let count = 0
    for (let i = 0; i < grid.length; i++) {
      // for (let j = 0; j < grid[0].length; j++) {
      // }
      visited.push([])
    }
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
  
        if (grid[i][j] === '0' || visited[i][j]) {
          continue
        }
  
        explore(grid, i, j, visited)
        ++count
      }
  
  
    }
  
  
      return count
  };
  
  function explore(grid, i, j, visited) {
      console.log(i)
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0' || visited[i][j]) {
      return
    }
    visited[i][j] = true
    explore(grid, i, j + 1, visited)
    explore(grid, i, j - 1, visited)
    explore(grid, i + 1, j, visited)
    explore(grid, i - 1, j, visited)
  }