/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slowptr = head, fastptr = head
    while(fastptr != null && fastptr.next != null){
        slowptr = slowptr.next
        fastptr = fastptr.next.next
    } 
    return slowptr
    
};