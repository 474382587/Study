/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var result
var getTargetCopy = function(original, cloned, target) {
    result = null
    if(cloned == null || target == null) return null;
    rec(cloned, target);
    return result;
};



function rec(clone, target){
    if(clone == null) return;
    if(result != null) return;

    if(clone.val == target.val){
        result = clone;
        return;
    }

    rec(clone.left,target);
    rec(clone.right,target);
}