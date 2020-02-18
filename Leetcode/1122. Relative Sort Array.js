/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  
    var result = []
    for(var i = 0; i < arr2.length; i++) {
        var target = arr2[i]
        for(var j = 0; j < arr1.length; j++) {
            
            var current = arr1[j]
            
            if(current === target) {
                result.push(arr1.splice(j, 1))
                j--
            }
            
        }
    }
    result = result.concat(arr1.sort((a,b)=>a-b))
    return result
    
};