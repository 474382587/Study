/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    var hash = {}
    var arr2 = []
    for(var i = 0; i < arr.length; i++) {
        // console.log(hash[arr[i]])
        if(hash[arr[i]] === undefined) {
            arr2.push(arr[i])
            hash[arr[i]] = true
        }
    }
    arr2.sort((a, b) => a - b)
    for(var i = 0; i < arr2.length; i++) {
        hash[arr2[i]] = i + 1
    }
    
    for(var i = 0; i < arr.length; i++) {
        arr[i] = hash[arr[i]]
    }
    
    return arr
};
