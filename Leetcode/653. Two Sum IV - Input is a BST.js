/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var arr
var findTarget = function(root, k) {
    arr = {}
    treeTravesal(root)
    console.log(arr)
    
    for(let key in arr) {
        let val = k - arr[key]
        console.log(val)
        if(arr[val] !== undefined && (arr[key] !== arr[val])) {
            return true
        }
    }
    
    return false
};
function treeTravesal(node) {
    if(node === null) return 
    
    arr[node.val] = node.val
    
    treeTravesal(node.left)
    treeTravesal(node.right)
}