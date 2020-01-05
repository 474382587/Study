/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word === word.toUpperCase()) return true
    if(word === word.toLowerCase()) return true
    
    var subStr = word.substr(1)
    // console.log(subStr)
    if(subStr !== subStr.toLowerCase()) {
        return false
    } else {
        return true
    }
    
};
