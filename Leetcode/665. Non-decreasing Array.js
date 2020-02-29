/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var cnt = 1, n = nums.length;
    for (var i = 1; i < n; ++i) {
        if (nums[i] < nums[i - 1]) {
            if (cnt == 0) return false;
            if (i == 1 || nums[i] >= nums[i - 2]) nums[i - 1] = nums[i];
            else nums[i] = nums[i - 1];
            --cnt;
        } 
    }
    return true;
};