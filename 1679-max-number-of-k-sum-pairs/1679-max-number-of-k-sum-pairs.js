/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    
    let m = new Map()
    nums.forEach(num => m.set(num, m.get(num) == null ? 1 : m.get(num)+1))
    let count = 0
    for(let num of nums){
        if(m.has(k-num) && m.get(num)>0){
            if(m.get(k-num) > 0){
                m.set(num, m.get(num)-1)
                if(m.get(k-num)>0){
                    m.set(k-num, m.get(k-num) -1)
                    count++
                }
            }
        }
    }
    
    return count
};