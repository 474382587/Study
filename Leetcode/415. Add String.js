/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
    var useNum1 = num1.length > num2.length
    num1 = num1.split('')
    num2 = num2.split('')
    var result = ''
    var carry = 0
    if(useNum1) {
        for(var i = 1; i <= num1.length; i++) {
            var digit1 = num1[num1.length - i]
            var digit2 = 0
            if(i <= num2.length) {
                digit2 = num2[num2.length - i]
            }
            var left = (carry + (digit1-0) + (digit2-0)) % 10
            carry = Math.floor((carry + (digit1-0) + (digit2-0)) / 10)
            result = left + result
        } 
    } else {
        for(var i = 1; i <= num2.length; i++) {
            var digit1 = num2[num2.length - i]
            var digit2 = 0
            if(i <= num1.length) {
                digit2 = num1[num1.length - i]
            }
            console.log(digit1,' + ', digit2)
            var left = (carry + (digit1-0) + (digit2-0)) % 10
            console.log(left,' + ', digit2)
            carry = Math.floor((carry + (digit1-0) + (digit2-0)) / 10)
            result = left + result
        } 
    }
    if(carry === 1) {
        result = '1' + result
    }
    return result
};