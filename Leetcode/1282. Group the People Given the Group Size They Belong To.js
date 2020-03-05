/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    var result = []
    
    var hash = {}
    for(var i = 0; i < groupSizes.length; i++) {
        var size = groupSizes[i]
        if(hash[size] !== undefined) {
            var index = 0
            while(hash[size][index].length >= size) {
                index++
                if(hash[size][index] === undefined){
                    hash[size][index] = []
                }
            }
            
            hash[size][index].push(i)
            
        } else {
            hash[size] = [[i]]
        }
    }
    for(var key in hash) {
        result = result.concat(hash[key])   
    }
    // console.log(result)
    return result
};