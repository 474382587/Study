/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var result = []
    
    
    for(var i = left; i <= right; i++) {
        var num = (i + '').split('')
        var can = true
        for(var j = 0; j < num.length; j++) {
            var mod = i % (num[j] - 0)
            if(mod !== 0) {
                can = false
                break
            }   
        }
        if(can) {
            result.push(i)
        }
    }
    
    return result
    
};
