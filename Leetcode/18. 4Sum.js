/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var hash = {}
    for(var i = 0; i < nums.length - 1; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            var sum = nums[i] + nums[j]
            if(hash[sum]) {
                hash[sum].push([i, j])
            } else {
                hash[sum] = [[i, j]]
            }
        }
    }
    var hash2 = {}
    var result = []
    for(var key in hash) {
        // console.log(key)
        var remain = target - key
        // console.log(remain)
        if(hash[remain] !== undefined) {
           
            for(var i = 0; i < hash[key].length; i++) {
                for(var j = 0; j < hash[remain].length; j++) {
                    var arr = [...hash[remain][j], ...hash[key][i]].sort((a, b) => a - b)
                    var str = arr.join('')
                    if(hash2[str] === undefined) {
                        hash2[str] = true
                        result.push([...hash[remain][j], ...hash[key][i]])
                    }
                }
            }
        }
    }
     // console.log(hash)
    result = result.filter(e => {
        var unique = true
        e.forEach((item, index) => {
            if(e.indexOf(item) !== index) {
                unique = false
            }
        })
        return unique
    })
    // console.log(result)
    result = result.map(a => {
        return a.map(e => {
            return nums[e]
        })
    })
    var hash3 = {}
    result = result.filter(e => {
        if(hash3[e.sort().join('')] === undefined) {
            hash3[e.sort().join('')] = true
            return true
        } else {
            return false
        }
    })
    // console.log(result)
    return result
    
};