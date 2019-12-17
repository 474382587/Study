/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var arr = []
    
    var a = nums1.length
    var b = nums2.length
    
    var useArr = a > b ? nums2 : nums1
    var largeArr = a > b ? nums1 : nums2
    
    for(var i = 0; i < useArr.length; i++ ) {
        var temp = useArr[i]
        if(largeArr.indexOf(temp) !== -1) {
            arr.push(temp)
            largeArr.splice(largeArr.indexOf(temp), 1)
        }
    }
    return arr
};