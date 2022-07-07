/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    
    let m = new Map()
    let len = nums.length
    let out = []
    nums.forEach(num => {
        let set
        num.forEach(n => {
            if(m.has(n)){
                let inc = m.get(n)
                inc++
                if(inc==len) out.push(n)
                m.set(n, inc)
                
            }else{
                if(1 == len) out.push(n)
                m.set(n, 1)
            }
        })
    })
    
    
    return out.sort((a,b) => a - b)
    
};