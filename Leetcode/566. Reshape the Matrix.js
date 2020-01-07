/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  
    var cols = nums[0].length
    var rows = nums.length
    var total = cols * rows
    
    var newTotal = r * c 
    // console.log(newTotal, ' + ', total)
    if(newTotal !== total) return nums
    
    // flat array
    var arr = []
    
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < cols; j++) {
            arr.push(nums[i][j])
        }
    }
    
    var result = []
    for(var i = 0; i < r; i++) {
        result.push([])
        for(var j = 0; j < c; j++) {
            result[i].push(arr.shift())
        }
    }
    // console.log(result)
    return result
};