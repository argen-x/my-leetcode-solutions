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
var oddEvenList = function(head) {
    
    if (!head) return head;
    
    var odd = head,
        even = head.next;
    
    while (odd && odd.next ) {
        var tmp = odd.next;  
        odd.next = odd.next.next;  
        if ( odd.next ) {
            odd = odd.next;
            tmp.next = odd.next;     
        }
    }
        
    odd.next = even;
    
    return head;
    
};