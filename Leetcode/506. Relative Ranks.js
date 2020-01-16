/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var copy = JSON.parse(JSON.stringify(nums))
    
    var ranks = copy.sort((a, b) => b - a)
    
    // console.log(nums)
    var hash = {}
    for(var i = 0; i < nums.length; i++) {
        if(i === 0) {
            hash[ranks[i]] = 'Gold Medal'
            continue
        }
        if(i === 1) {
            hash[ranks[i]] = 'Silver Medal'
            continue
        }
        if(i === 2) {
             hash[ranks[i]] = 'Bronze Medal'
            continue
        }
        hash[ranks[i]] = (i + 1) +''
    }
    // console.log(nums)
    for(var i = 0; i < nums.length; i++) {
        nums[i] = hash[nums[i]]
    }
    // console.log(hash)
    // console.log(nums)
    return nums
};