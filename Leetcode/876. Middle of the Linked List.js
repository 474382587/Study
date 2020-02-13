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
var middleNode = function(head) {
    var count = 0
    var pointer = head
    while(pointer !== null) {
        count++
        pointer = pointer.next
    }
    console.log(count)
    var mid
    if((count % 2 === 0)) {
        mid = count / 2
    } else {
        mid = (count - 1) / 2
    }
    count = 0
    var pointer2 = head
    while(pointer2 !== null) {
        
        if(count === mid) {
            return pointer2
        }
        count++
        pointer2 = pointer2.next
    }
};
