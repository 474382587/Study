/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    
    var rows = board.length
    var cols = board[0].length
    
    if(rows < 1 || cols < 1) return []
    
    var old = board.map(e => e.map(a => a))
    // console.log(old)
    
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < cols; j++) {
            
            let alived = (aliveNeighbors(i, j))
            if(old[i][j] === 1) {
                if(alived < 2) {
                    board[i][j] = 0
                }
                if(alived === 2 || alived === 3) {
                    board[i][j] = 1
                } 
                if(alived > 3) {
                    board[i][j] = 0
                }
            } else {
                if(alived === 3) {
                    board[i][j] = 1
                }
            }
        }
    }
    
    return board
    
   
    function aliveNeighbors(row, col) {
       
        var directions = [
            {
                x: -1,
                y: -1,
            },
            {
                x: -1,
                y: 0,
            },
            {
                x: -1,
                y: 1,
            },
            {
                x: 0,
                y: -1,
            },
            {
                x: 1,
                y: -1,
            },
            {
                x: 0,
                y: 1,
            },
            {
                x: 1,
                y: 0,
            },
            {
                x: 1,
                y: 1,
            }
        ]
        var count = 0
        for(var direction of directions) {
            // console.log(direction)
            let x = direction.x + row
            let y = direction.y + col
            
            if(x < 0 || x >= rows) continue
            if(y < 0 || y >= cols) continue
            
            // console.log(x)
            // console.log(y)
            if(old[x][y] === 1) {
                 count++
            }
            
        }
        
        return count
        
    }
    
};
 