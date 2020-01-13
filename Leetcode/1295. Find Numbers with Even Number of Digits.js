/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    nums = nums.map(num => {
        return ((num + '').length % 2) === 0 ? true : false
    }).filter(num => num === true)
    
    return nums.length
};