/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    s = s.split("")
    max = 0
    for(let i = 0; i < s.length; i++) {
        let all = {}
        let localMax = 0
        for(let j = i; j < s.length; j++) {    
          if(all[s[j]]) {
            break
          } else {
            all[s[j]] = true
            localMax++
          }
        }
        max = localMax > max ? localMax : max
    }

    return max
};

// lengthOfLongestSubstring("abcabcbb")