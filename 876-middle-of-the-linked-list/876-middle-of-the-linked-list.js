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
    
    let len = getLength(head)
    let middle = Math.floor(len/2)
    let idx = 0
    let curr = head
    let newNode = null
    while(idx < len){
       
        if(idx == middle){
           newNode = curr
           break 
        }
      
        curr = curr.next
        idx++
    }
    
    return newNode
    
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