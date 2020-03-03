/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    var n = nums.length;

    // just need to have know the product before this index and after this index

    // before:
    var forward = [1];
    forward.length = n;
    for (var i = 1; i < n; i++) {
        forward[i] = forward[i - 1] * nums[i - 1];
    }
    var backward = [];
    backward.length = n - 1;
    backward.push(1);
    for (var i = n - 2; i >= 0; i--) {
        backward[i] = backward[i + 1] * nums[i + 1];
    }
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(backward[i] * forward[i]);
    }
    return result;
};
