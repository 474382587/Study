/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n < 1) return 0
    var result = 1
    while(calSteps(result) <= n) {
        result++
        if(calSteps(result) > n) {
            result--
            break
        }
    }
    return result
};

function calSteps(row) {
    if(row === 1) return 1
    
    return (1 + row) * row / 2
    
}
