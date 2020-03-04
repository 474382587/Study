/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var hash = {}
    
    
    for(var i = 0; i < nums.length; i++) {
        var count = 0
        if(hash[nums[i]]) continue
        for(var j = 0; j < nums.length; j++) {
            if(j === i) {
                continue
            }
            if(nums[j] < nums[i]) {
                count++
            }
        }    
        hash[nums[i]] = count
    }
    var res = []
    for(var i = 0; i < nums.length; i++) {
        res.push(hash[nums[i]])
    }
    return res
    
};