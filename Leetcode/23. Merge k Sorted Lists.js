/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null
    var result = []
    for(var i = 0; i < lists.length; i++) {
        var head = lists[i]
        while(head !== null) {
            result.push(head.val)
            head = head.next
        }
    }
    result = result.sort((a, b) => a - b)
    var pointer = null
    var head = null
    if(result.length < 1) return null
    if(result.length < 2) return new ListNode(result[0])
    
    pointer = new ListNode(result[0])
    head = pointer
    for(var i = 0; i < result.length - 1; i++) {
        
        pointer.next = new ListNode(result[i + 1])
        pointer = pointer.next
        
    }
    // console.log(result)
    return head
    
};
