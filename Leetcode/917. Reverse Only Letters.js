/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    var regex = /[^a-zA-Z]/g
    
    var str = S.replace(regex, '')
    var arr = S.split('')
    var word = /[a-zA-Z]/
    str = str.split('')
    
    for(var i = 0; i < arr.length; i++) {
        if(word.test(arr[i])) {
            arr[i] = str.pop()
        }
    }
    
    
    return arr.join('')
};