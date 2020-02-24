/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    var arr = []
    
    var hash = []
    
    for(var i = 0; i < mat.length; i++) {
        var count = 0
        for(j = 0; j < mat[0].length; j ++) {
            if(mat[i][j] === 1) {
                count++
            }
        }
        if(hash[count] === undefined) {
            hash[count] = [i]
        } else {
            hash[count].push(i)
        }
    }
    hash = hash.filter(e => e !== undefined)
    
    hash = hash.reduce((acc, cur) => {
        return acc.concat(cur)
    }, [])
    // console.log(hash)
    return hash.slice(0, k)
};