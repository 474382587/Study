/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    return travesal(root, L, R)
};

function travesal(node, L, R) {
    if(node === null) {
        return 0
    }
    if(node.val >= L && node.val <= R) {
        return travesal(node.left, L, R) + travesal(node.right, L, R) + node.val
    } else {
        return travesal(node.left, L, R) + travesal(node.right, L, R)
    }
}