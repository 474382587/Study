/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    var remain = n - 1
    var first = 1
    
    var zeros = (remain + '').includes('0')
    
    while(zeros) {
        remain--
        first++
        while((first + '').includes('0')) {
            remain--
            first++
        }
        zeros = (remain + '').includes('0')
    }
    return [first, remain]
};
