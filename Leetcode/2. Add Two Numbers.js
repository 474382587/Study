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
  var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0)
    let head = l3
    let sum = 0
    let carry = 0
    let arr = []
    while (l1 !== null || l2 !== null) {
      if (l1 === null) {
        carry = (head.val + l2.val) > 9 ? 1 : 0
        sum = (head.val + l2.val) % 10
        l2 = l2.next
      } else if (l2 === null) {
        carry = (l1.val + head.val) > 9 ? 1 : 0
        sum = (l1.val + head.val) % 10
        l1 = l1.next
      } else {
        carry = (l1.val + l2.val + head.val) > 9 ? 1 : 0
        sum = (l1.val + l2.val + head.val) % 10
        l2 = l2.next
        l1 = l1.next
      }
      console.log(carry)
      head.val = sum
      arr.push(sum)
      if ((l1 !== null || l2 !== null || carry > 0)) {
        head.next = new ListNode(carry)
        head = head.next
      } else {
        head.next = null
      }
    }
  
    console.log(head)
    console.log(arr.reverse().join(""))
  
    return l3
  
  
  
  
  
  };