/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(si, numRows) {
    if(numRows < 2) return si 
    if(numRows === 2) {
        
    }
    let s = si.split("")
    
    arr = []
    for(let i = 0; i < numRows; i++) {
        arr.push([])
    }
    
    var col = 0
    var direction = 'down'
    var pre = numRows - 1
    
    while(s.length > 0) {
        if(direction === 'down') {
            for(var i = 0; i < numRows; i++) {
                if(arr.length < 1) break
                arr[i][col] = s[0]
                s.splice(0, 1)
            }
            if(numRows < 3) {
                direction = 'down'
            } else {
                direction = 'up'
            }
            col++
        } else if(direction === 'up') {
            arr[pre - 1][col] = s[0]
            s.splice(0, 1)
            if(pre > 2) {
                direction = 'up'
                pre = pre - 1
            } else {
                direction = 'down'
                pre = numRows - 1
            }
            col++
        }
    }
    // console.log(arr)
    return arr.reduce((acc, cur) => {
        // console.log(cur)
        return acc + cur.filter(e => !!e).join('')
    }, '')
    
};
