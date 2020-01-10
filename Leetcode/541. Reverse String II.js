/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  
    if(s.length < k) {
        return s.split('').reverse().join('')
    }
    
    s = s.split('')
    
    var count = 0
    var max = 2 * k
    
    var arr = [[]]
    var arr2 = []
    
    for(var i = 0; i < s.length; i++) {
        
        if(count < k) {
            // console.log(s[i], '   ', count)
            arr[arr.length - 1].push(s[i])
            count++
        } else {
            count = 1
            arr.push([s[i]])
        }
    }
    for(var i = 0; i < arr.length; i++) {
        
        if((i % 2) === 0) {
            arr[i] = arr[i].reverse()
        }
        
    }
    
    var result = arr.map(e => {
        return e.join('')
    }).join('')
    return result 
    
};