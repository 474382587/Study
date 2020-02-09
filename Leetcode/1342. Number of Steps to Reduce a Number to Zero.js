/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    if(num === 0) {
        return 0
    }
    if(num === 1) {
        return 1
    }
    var count = 0
    while(num !== 0) {
        if((num % 2) === 0) {
            num = num / 2
        } else {
            num--
        }
        count++
    }
    return count
};