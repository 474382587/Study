/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var copy = heights.slice(0)
    var sorted = copy.sort((a, b) => a - b)
    // console.log(sorted)
    // console.log(heights)
    var count = 0
    for(var i = 0; i < sorted.length; i++) {
        if(sorted[i] !== heights[i]) count++
    }
    return count
};
