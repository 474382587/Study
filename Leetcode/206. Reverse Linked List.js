/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var pre = null
    var tail = null
    while(head !== null) {
        head.pre = pre
        tail = head
        pre = head
        head = head.next
    }
    
    var result = tail
    while(tail !== null) {
        tail.next = tail.pre
        tail = tail.pre
    }
    return result
    
};