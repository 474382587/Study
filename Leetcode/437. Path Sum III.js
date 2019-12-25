/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    treeTraversal(root, sum)
    if(root === null) return 0
    return treeTraversal(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};

function treeTraversal(root, sum) {
    var count = 0
    if(root === null) {
        return 0
    }
    if(root.val === sum) {
        count++
    }
    count += treeTraversal(root.left, sum - root.val)
    count += treeTraversal(root.right, sum - root.val)
    
    return count
}