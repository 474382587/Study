/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    var arr = []
    while(head !== null) {
        arr.unshift(head.val)
        head = head.next
    }
    var result = 0
    for(var i = 0; i < arr.length; i++) {
        result += Math.pow(2, i) * arr[i]
    }
    return result
};