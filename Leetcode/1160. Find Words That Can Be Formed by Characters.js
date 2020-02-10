/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    var hash = {}
    for(var i = 0; i < chars.length; i++) {
        if(hash[chars[i]] === undefined) {
            hash[chars[i]] = 1
        } else {
            hash[chars[i]]++
        }
    }
    var count = 0
    for(var i = 0; i < words.length; i++) {
        var hash2 = JSON.parse(JSON.stringify(hash))
        var incre = true
        for(var j = 0; j < words[i].length; j++) {
            if(hash2[words[i][j]] === undefined) {
                incre = false
                break
            } 
            
            if(hash2[words[i][j]] < 1) {
                incre = false
                break
            }
            
            hash2[words[i][j]]--
            
        }
        if(incre) {
            count += words[i].length
        }
    }
    
    
    return count
};