/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    var arr = []
    var count = 0
    
    
    for(var i = 0; i < s.length; i++) {
        if(arr.length === 0) {
            arr.push(s[i])
            continue
        }
        
        if(arr[arr.length - 1] === s[i]) {
            arr.push(s[i])
        } else {
            arr.pop()
        }
        
        
        if(arr.length === 0) {
            count++
        }
        
    }
    
    return count
};