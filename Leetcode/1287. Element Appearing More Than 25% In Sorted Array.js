/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    var hash = {}
    
    var target = arr.length / 4
    
    for(var i = 0; i <arr.length; i++) {
        if(hash[arr[i]]) {
            hash[arr[i]]++
            if(hash[arr[i]] > target) {
                return arr[i]
            }
        } else {
            hash[arr[i]] = 1
        }
    }
    return arr[0]
};