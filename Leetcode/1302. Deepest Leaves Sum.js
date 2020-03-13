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
var hash = {}
var deepestLeavesSum = function(root) {
    hash = {}
    treeTravesal(root, 0)
    var max = 0
    for(var key in hash) {
        if((key - 0) > max) {
            max = key
        }
    }
    return hash[max].reduce((a, b) => a + b, 0)
    
};

function treeTravesal(node, level) {
    
    if(node === null) return
    level++
    
    if(hash[level] === undefined) {
        hash[level] = [node.val]
    }
    else {
        hash[level].push(node.val)
    }

    treeTravesal(node.right, level)
    treeTravesal(node.left, level)

}
