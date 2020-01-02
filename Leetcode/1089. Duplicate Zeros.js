/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    var count = 0
    var index = 0
    while(index < arr.length) {
        
        if(arr[index] === 0) {
            arr.splice(index, 0, 0)
            arr.pop()
            index++
        }
        
        index++
    }    
};