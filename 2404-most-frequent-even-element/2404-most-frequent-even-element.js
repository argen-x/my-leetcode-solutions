/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let m = new Map()
    for(let x of nums){
        if(x%2==0){
            m.set(x, m.get(x)==null? 1: m.get(x)+1)
        }
    }
    
    if(m.size == 0) return -1
    
    let m_sorted = new Map([...m].sort((a, b) => b[1] == a[1] ? a[0] - b[0] : b[1] - a[1]))
    
    return [...m_sorted.keys()][0]
    
};