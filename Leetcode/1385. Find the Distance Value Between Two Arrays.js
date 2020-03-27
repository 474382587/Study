/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    return arr1.filter(a => {
        return arr2.every(b => Math.abs(b - a) > d)
    }).length
};
