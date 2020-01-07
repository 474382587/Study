/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var hash = {}
    var count = 0
    for(var i = 2; i < n; i++) {
        if(hash[i] === undefined) {
            var num = i * 2
            var index = 2
            while(num < n) {
                hash[num] = false
                index++
                num = index * i
            }
            count++
            // console.log(hash)
        } 
    }
    return count
    
};