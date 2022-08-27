/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    
    let m = new Map()
    let tuple = 0
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            let prod = nums[i] * nums[j]
            if(m.has(prod)){
                tuple+=m.get(prod) * 8
                m.set(prod, m.get(prod)+1)
            }else{
                m.set(prod, 1)
            }
        }
    }
    
    return tuple
    
};