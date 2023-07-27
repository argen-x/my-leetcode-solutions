/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    
    let m = new Map()
    nums.forEach(num => m.set(num, m.get(num) == null ? 1 : m.get(num) +1))

    let n = nums.length - 1
    for(let i = 1; i<n; i++){
        if(!m.has(i)) return false
        if(m.get(i) != 1) return false
        else if(m.get(i) == 1) m.delete(i)
    }

    if(m.size == 0 || m == null || !m.has(n)) return false

    if(m.get(n) != 2) return false

    return true
    

};