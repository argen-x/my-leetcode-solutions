/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let m = new Map()
    nums.forEach((num) => {
        if(m.has(num)){
            let x = m.get(num)
            x++
            m.set(num, x)
        }else{
            m.set(num, 1)
        }
    })
    
    let sorted = new Map([...m].sort((a, b) => b[1] - a[1]))
    
    let out = []
    for(let [key, value] of sorted){
        k--
        out.push(key)
        if(k == 0){
            break
        }
    }
    
    return out
    
};