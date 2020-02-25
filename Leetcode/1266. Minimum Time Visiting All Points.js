/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    var result = 0
    for(var i = 1; i < points.length; i++) {
        var x = points[i - 1][0]
        var y = points[i - 1][1]
        
        var targetX = points[i][0]
        var targetY = points[i][1]
        
        while(x !== targetX || y !== targetY) {
            
            if(x < targetX) {
                x++
            }
            if(y < targetY) {
                y++
            }
            if(x > targetX) {
                x--
            }
            if(y > targetY) {
                y--
            }
            result++
        }
        
    }
    // console.log(result)
    return result
};