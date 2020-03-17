/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    var str = ''
    var arr = [
        'a',
        'b',
        'c'
    ]
    
    if((n % 2) === 0) {
        for(var i = 0; i < n - 1; i++) {
            str += arr[1]
        }
        str += arr[0]
    } else {
        for(var i = 0; i < n - 2; i++) {
            str += arr[0]
        }    
        if(n > 2) {
            str += arr[1]
            str += arr[2]   
        } else {
            str += arr[2]
        }
    }
    return str
};