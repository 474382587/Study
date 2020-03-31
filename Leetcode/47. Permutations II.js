/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var ans = []
    var newNums = nums.slice()
    nums = nums.map((e, index) => index)
   
   for(var j = 0; j < nums.length; j++) {
       
       var current = [nums[j]]
       dfs(nums.length, current)
       
   }
   
   ans = ans.map(e => {
       return e.map(a => newNums[a])
   })
   var hash = {}
   ans = ans.filter(e => {
       if(hash[e.join('')] === undefined) {
           hash[e.join('')] = true
           return true
       } else {
           return false
       }
   })
   
   return ans

   function dfs(total, cur) {

       if(cur.length === total) {
           ans.push(cur.slice())
       }
       for(var i = 0; i < nums.length; i++) {
           if(cur.includes(nums[i])) {
               continue
           } 
           cur.push(nums[i])
           dfs(total, cur)
           cur.pop()
       }    
   }
};
