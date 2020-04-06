/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var ans = []
    tt(root)
    return ans
    function tt(node) {

        if (node === null) {
            return
        }
        tt(node.left)
        ans.push(node.val)
        tt(node.right)

    }

};

