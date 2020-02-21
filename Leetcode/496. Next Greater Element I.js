var nextGreaterElement = function(nums1, nums2) {
    let out = Array(nums1.length).fill(-1);
    nums1.forEach((n,i) => {
        for(let j = nums2.indexOf(n)+1; j < nums2.length; j++) {
            if (nums2[j] > n) {
                out[i] = nums2[j];
                break;
            }
        }
    });
    
    return out;
};