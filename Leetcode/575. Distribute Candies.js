/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var kinds = {}
    var count = 0
    for(var i = 0; i < candies.length; i++) {
        if(kinds[candies[i]]) {
            kinds[candies[i]]++
        } else {
            kinds[candies[i]] = 1
            count++
        }
    }
    var need = candies.length / 2
    if(count >= need) return need
    return count
    
    
};