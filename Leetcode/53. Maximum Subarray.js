/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    var max = nums[0]
    
    var maxArr = [nums[0]]
    var minArr = [nums[0]]
    
    
    for(var i = 1; i < nums.length; i++) {
        maxArr[i] = Math.max(maxArr[i - 1], nums[i - 1] + nums[i])
    }
    
    return Math.max(...nums)
};