/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    var res = []



    dfs(root)
    return res

    function dfs(node) {

        if (node === null) return

        for (var child of node.children) {
            dfs(child)
        }
        res.push(node.val)
    }
};