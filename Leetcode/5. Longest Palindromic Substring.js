/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    if (s.length < 2) {
        return s
    }  
    
    let arr = []
    let left = 0
    let right = 0
    
    for(let i = 0; i < s.length; i++) {
        arr[i] = []
        for(let j = 0; j < s.length; j++) {
            arr[i].push(false)
        }
    }
    // console.log(arr)
    for(let j = 1; j < s.length; j++) {
        for(let i = 0; i < j; i++) {
            
            let isInnerWordPalindrome = arr[i+1][j-1] || j - i <= 2
            
            if(s.charAt(i) === s.charAt(j) && isInnerWordPalindrome) {
                arr[i][j] = true
                
                if(j - i > right - left) {
                    left = i
                    right = j
                }
            
            }
            
            
            // console.log(arr)
            
        }
        
    }
    // console.log(left, right)
    return s.substring(left, right + 1)
    
};