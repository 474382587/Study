/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  
  
  var mergeTwoLists = function(l1, l2) {
  var l3 = new ListNode(0)
  var head = l3
      if(l1 === null && l2 === null) {
          return null
      }
      if(l1 === null) {
          return l2
      } 
      if(l2 === null) {
          return l1
      }
      
    while (l1 !== null || l2 !== null) {
  
      if (l1 === null) {
        head.val = l2.val
        l2 = l2.next
      }
      else if (l2 === null) {
        head.val = l1.val
        l1 = l1.next
      }
      else {
        console.log(head)
        console.dir(l3)
        // head.val = l1.val > l2.val ? l2.val : l1.val
          if(l1.val > l2.val) {
              head.val = l2.val
              l2 = l2.next
          } else {
              head.val = l1.val
              l1 = l1.next
          }
      }
  
      if(l1 !== null || l2 !== null) {
        head.next = new ListNode(0)
        head =head.next
      }
    }
    return l3
  };