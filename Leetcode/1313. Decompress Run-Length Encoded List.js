/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    var arr = []
    var count
    for(var i = 0; i < nums.length; i++) {
        if((i % 2) === 0) {
            count = nums[i]
        } else {
            for(var j = 0; j< count; j++) {
                arr.push(nums[i])
            }
        }
    }
    return arr
};