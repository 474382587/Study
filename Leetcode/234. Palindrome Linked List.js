/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var arr = []
    
    var pre = null
    while(head !== null) {
        head.pre = pre
        arr.push(head.val)
        pre = head
        head = head.next
    }
    // if((arr.length === 2) && (arr[0] !== arr[1])) return false
    while(pre !== null) {
        if(arr.shift() !== pre.val) {
            return false
        }
        pre = pre.pre
    }
    
    return true
};