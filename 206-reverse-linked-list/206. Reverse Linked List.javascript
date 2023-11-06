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



var reverseList = function(head) {
    
    let x = []
    let curr = head
    while(curr){
        x.push(curr.val)
        curr = curr.next
    }
    

    let newList = x.reduce((acc, curr) => {
    if (acc == null) {
        acc = new ListNode(curr);

    } else {
        acc = new ListNode(curr, acc);
    }
    return acc;
    }, null);

    return newList
    
};