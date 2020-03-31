/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var ans = []
var subsets = function(nums) {
    
    ans = []
    for(var j = 0; j <= nums.length; j++) {
        
        dfs(j, 0, [])
        
    }
    
    
    
    return ans
    
    
    



    function dfs(n, s, cur) {
        if(cur.length === n) {
            ans.push(cur.slice())
            // console.log(ans)
            return 
        }
        for(var i = s; i < nums.length; i++) {
            cur.push(nums[i])
            dfs(n, i + 1, cur)
            cur.pop()
        }
    }

    
    
};