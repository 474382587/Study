/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    var arr = []
    for(var i = 0; i < nums.length; i++) {
        let cur = nums[i]
        let pos = index[i]
        arr.splice(pos, 0, cur)
    }
    return arr
};