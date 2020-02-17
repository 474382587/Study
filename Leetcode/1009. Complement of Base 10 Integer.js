/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    var binary = N.toString(2)
    
    var str = ''
    for(var i = 0; i < binary.length; i++) {
        
        var digit = binary[i] === '1' ? '0' : '1'
        str += digit
        
    }
    return parseInt(str, 2)
};