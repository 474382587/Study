/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    var str = S.split('-').join('').toUpperCase()
    if(str.length < K) return str
    var result = ''
    var first = str.length % K
    if(first !== 0) {
        for(var i = 0; i < first; i++) {
            result += str[i]
        }
        result += '-'
        str = str.slice(first)
    }
    for(var i = 0; i < str.length; i++) {
        
        if((i % K) === 0 && i !== 0) {
            result += '-'
        }
        result += str[i]
    }
    return result
};
