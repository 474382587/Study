/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    while(num >= 4) {
        num = num / 4
    }
    return num === 1
};