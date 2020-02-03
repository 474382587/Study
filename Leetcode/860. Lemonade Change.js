/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var hash = {
        5: 0,
        10: 0,
        20: 0
    }
    
    for(var i = 0; i < bills.length; i++) {
        
        if(bills[i] === 5) {
            hash[5]++
            continue
        }
        
        if(bills[i] === 10) {
            if(hash[5] > 0) {
                hash[5]--
                hash[10]++
            } else {
                return false
            }
        }
        
        if(bills[i] === 20) {
            if((hash[5] > 0) && (hash[10] > 0)) {
                hash[5]--
                hash[10]--
                hash[20]++
            } else if(hash[5] > 2) {
                hash[5]--
                hash[5]--
                hash[5]--
                hash[20]++
            } else {
                return false
            }
        }
    }
    return true
};
