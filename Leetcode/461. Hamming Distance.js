/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2)
    y = y.toString(2)
    
    var diff = Math.abs(x.length - y.length)
    
    if(diff > 0) {
        var prefix = ''
        for(var i = 0; i < diff; i++) {
            prefix += '0'
        }
        if(x.length > y.length) {
            y = prefix + y
        } else {
            x = prefix + x
        }
    }
    
    // console.log(x)
    // console.log(y)
    
    var count = 0
    for(var i = 0; i < x.length; i++) {
        if(x[i] !== y[i]) count++
    }
    return count
};
