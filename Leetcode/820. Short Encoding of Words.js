/**
 * @param {string[]} words
 * @return {number}
 */
// var minimumLengthEncoding = function(words) {
//     let set = new Set(words);
//     set.forEach( a => {
//         for(let i = 1 ;i < a.length - 1; i++) {
//             set.delete(a.substring(i, a.length));
//         }
//     });
//     let res = 0;
//     set.forEach(a => res += a.length + 1);
//     return res;
// };

var minimumLengthEncoding = function(words) {
    var hash = {}

    for(let i = 0; i < words.length; i++) {
        hash[words[i]] = words[i]
    }
    // console.log(hash)
    for(let key in hash) {
        // console.log(hash[key].length)
        let len = hash[key].length - 1
        for(let i = 1; i < len; i++) {
            // console.log(hash)
            let sub = hash[key].substring(i, len+1)
            delete hash[sub]
        } 
    }
    var length = 0
    for(let key in hash) {
        length += (hash[key].length + 1)
    }
    return length
}