/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    var ans = []

    if (root === null) {
        return []
    }

    var cur = []
    cur.push(root)
    var index
    while (cur.length !== 0) {
        index = cur[0].index || 0
        ans[index] = ans[index] === undefined ? [cur[0].val] : ans[index].concat(cur[0].val)
        index++
        for (var child of cur[0].children) {
            cur.push({
                ...child,
                index
            })
        }
        cur.shift()
    }
    // console.log(ans)
    return ans
};