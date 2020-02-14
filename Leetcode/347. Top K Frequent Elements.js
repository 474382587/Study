/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var hash = {}
    for(var i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
    }
    console.log(hash)
    var arr = []
    for(var key in hash) {
        arr.push({
            [key]: hash[key],
            'value': key
        })
    }
    console.log(arr)
    
    arr = arr.sort((a, b) => b[b.value] - a[a.value])
    console.log(arr)
    return arr.map(e => e.value).slice(0, k)
    
};