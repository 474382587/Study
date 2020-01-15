/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  
    var mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    
    var hash = {}
    var count = 0
    words.forEach(word => {
        
        var arr = word.split('')
        var temp = ''
        arr.forEach(e => {
            // console.log(e.charCodeAt() - 97)
            var code = e.charCodeAt() - 97
            temp += mos[code]
        })
        // result.push(temp)  
        if(hash[temp] === undefined) {
            count++
            hash[temp] = true
        }
    })
    
    // console.log(hash)
    return count
};