/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var index = 0
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[index] = nums[i]
            index++
        }
    }
    
    for(var i = index; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};