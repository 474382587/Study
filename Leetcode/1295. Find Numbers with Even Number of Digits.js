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

switch (key) {
    case '1':
        console.log('1')
        break;
    case '2':
        console.log('2')
        
        break
    default:
        console.log('default')
        break;
}