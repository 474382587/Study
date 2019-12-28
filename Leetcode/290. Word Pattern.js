/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr1 = pattern.split('')
    var arr2 = str.split(" ")
    
    if(arr1.length !== arr2.length) return false
    
    var hash = {}
    var hash2 = {}
    for(var i = 0; i < arr1.length; i++) {
        if(hash[arr1[i]]) {
            if(arr2[i] !== hash[arr1[i]]) {
                return false
            }
        } else {
            hash[arr1[i]] = arr2[i]
        }
    }
    
    for(var i = 0; i < arr1.length; i++) {
        if(hash2[arr2[i]]) {
            if(arr1[i] !== hash2[arr2[i]]) {
                return false
            }
        } else {
            hash2[arr2[i]] = arr1[i]
        }
    }
    
    return true
};
