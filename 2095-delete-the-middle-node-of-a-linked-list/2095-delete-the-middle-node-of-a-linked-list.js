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
var deleteMiddle = function(head) {

   
    const len = getLength(head)
    let middle = Math.floor(len / 2)
    
    if(len == 1) return head.val = null
    
    let idx = 0
    let curr = head
    while(idx < len && idx <= middle){
        if(idx+1 === middle){
            curr.next = curr.next.next
            break
        }
        curr = curr.next
        idx++
    }
    
    return head
    
    
    function getLength(head){
        //find the length
        let len = 0
        let curr = head
        while (curr) {
            len++
            curr = curr.next
        }
        return len
    }
};