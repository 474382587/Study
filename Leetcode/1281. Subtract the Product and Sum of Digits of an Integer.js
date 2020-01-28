/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var arr = (n + '').split('')
    console.log(arr)
    var product = arr.reduce((acc, cur) => {
        
       return (acc - 0) * (cur - 0) 
    }, 1)
    var sum = arr.reduce((acc, cur) => {
       return (acc - 0) + (cur - 0) 
    }, 0)
    
    return product - sum
};
