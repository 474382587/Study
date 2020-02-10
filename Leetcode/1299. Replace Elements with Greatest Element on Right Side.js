/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    var result = []
    
    for(var i = 0; i < arr.length - 1; i++) {
        var max = undefined
        for(var j = i + 1; j < arr.length; j++) {
            if(max !== undefined) {
                max = max < arr[j] ? arr[j] : max
            } else {
                max = arr[j]
            }
        }
        
        
        result.push(max)
        
    }
    
    result.push(-1)
    return result
    
};