/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    // var nums = nums.sort()
    var hash = {}
    var result = []
    for(var i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = true
        } else {
            result.push(nums[i])
        }
    }
    for(var i = 1; i <= nums.length; i++) {
        if(hash[i] === undefined) {
            result.push(i)
        }
    }
    return result
};
