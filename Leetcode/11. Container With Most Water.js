/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left
    var right
    var width
    var tall
    var max
    
    for(var i = 0; i < height.length - 1; i++) {
        
        left = height[i]
        for(var j = 1; j < height.length; j++ ) {
            right = height[j]
            tall = Math.min(left, right)
            width = j - i
            
            if(!max) {
                max = tall * width
            }
            if((tall *  width) > max) {
                max = tall * width
            }
        }
        
    }
    return max
    
};
