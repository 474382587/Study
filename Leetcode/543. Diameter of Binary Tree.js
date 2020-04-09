/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max = 0
    let recurse = (node) => {
        if(!node) { return 0 }
        let leftDistance = recurse(node.left)
        let rightDistance = recurse(node.right)
        max = Math.max(max, leftDistance + rightDistance)
        return Math.max(leftDistance, rightDistance) + 1
    }
    recurse(root)
    return max
};