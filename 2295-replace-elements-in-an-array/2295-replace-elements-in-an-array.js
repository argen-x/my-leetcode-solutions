/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    
    let m = new Map()
    nums.forEach((item, index) => {
        m.set(item, index)
    })
    
    for(let op of operations){
        if(m.has(op[0])){
           let ind = m.get(op[0])
           m.set(op[1], ind)
           m.delete(op[0])
        }
    }
    
    let res = []
    for(let [key, value]  of m){
        res[value] = key
    }
    
    return res
    
};