/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    
    let ind = 0
    let temp = head
    
    while(head){
        head = head.next
        ind++
    }

    let n = ind
    let m = new Map()
    let maxSum = 0
    ind = 0
    while(temp){
        let cur = temp.val
        if(m.get(n-ind) != null){
            let sum = cur + m.get(n-ind)
            maxSum = Math.max(sum, maxSum)
        }
        temp = temp.next
        ind++
        m.set(ind, cur)
    }

    return maxSum




};