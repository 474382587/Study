/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    var hash = {}
    for(var i = 0; i < arr.length; i++) {
        hash[arr[i]] = 2 * arr[i]    
        if(arr[i] === 0) {
            if(hash.zero === undefined) {
                hash.zero = 1
            } else {
                hash.zero++
            }
        }
    } 
    console.log(hash)
    var result = false
    for(var i = 0; i < arr.length; i++) {
        if(hash[hash[arr[i]]] !== undefined) {
            result = true
            if(hash[hash[arr[i]]] === 0) {
                if(hash.zero < 2) {
                    result = false
                }
            }
        } 
    }
    return result
};