/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    
    if(start === destination) return 0
    
    var totalDistance = distance.reduce((acc, cur) => cur + acc, 0)
    var temp
    
    if(start > destination) {
        temp = start
        start = destination
        destination = temp
    }
    
    var length = 0
    for(var i = start; i < destination; i++) {
        length += distance[i]
    }
    
    return Math.min(length, totalDistance - length)
    
};