/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    var str = (num + '').split('')
    
    for(var i = 0; i < str.length; i++) {
        var digit = str[i] - 0
        if(digit === 6) {
            str[i] = 9
            return str.join('') - 0
        }
    }
    return num
};
