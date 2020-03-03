/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    var hash = {}    
    var arr = people.sort((a, b) => {
        return a[0] - b[0]
    })
    
    console.log(arr)
    
    var result = []
    result.length = people.length
    for(var i = 0; i < arr.length; i++) {
        console.log('====', arr[i])
        result = insert(arr[i][0], arr[i][1], result)
    }
    console.log(result)
    return result
};



function insert(height, num, result) {    
    var count = 0
    for(var i = 0; i < result.length; i++) {
        if(result[i] !== undefined) {
            if(result[i][0] >= height) {
                count++
            }
            continue
        } else {
            if(count === num) {
                result[i] = [height, num]
                break
            } else {
                count++
            }
        }
    }
    return result
}