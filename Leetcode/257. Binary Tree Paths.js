/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var res = []
var binaryTreePaths = function(root) {
    res = []
    tt(root, '', root, true)
    res = res.filter((a, index) => index === res.indexOf(a))
    // console.log(res)
    if(res[0] === '') res = []
    return res
};


function tt(node, pre, oppo, init) {
    if(node === null) {
        if(oppo === null) {
            res.push(pre)
        }
        return
    }
    if(init) {
        pre += node.val
    }
    else {
        pre += '->' + node.val
    }
    tt(node.left, pre, node.right)
    tt(node.right, pre, node.left)
}