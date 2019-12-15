/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a, b) => (a-0) - (b-0))
    
    var len = nums.length
    
    for(var i = 0; i <= len; i++) {
        if(i !== nums[i]) {
            return i
        }
    }
    return false
}; 