/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    var hash = {}
    for(var i = 0; i < deck.length; i++) {
        
        if(!hash[deck[i]]) {
            hash[deck[i]] = 1
        } else {
            hash[deck[i]]++
        }
        
    }
    
    var min
    for(var key in hash) {
        if(!min) {
            min = hash[key]
            continue
        }
        if(hash[key] < min) {
            min = hash[key]
        }
    }
    
    if(min < 2) return false
    
    
    for(var i = 2; i <= min; i++) {
        var success = true
        for(var key in hash) {
// console.log("key: ", key)
            if((hash[key] % i) !== 0) {
                success = false
				break
            }
            
        }
        if(success) {
			// console.log(i)
			return true
		}

    }
    
    return false
};