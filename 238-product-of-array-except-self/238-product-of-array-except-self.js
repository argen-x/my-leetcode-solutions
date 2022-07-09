/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let out  = []
    for(let i = 0; i<nums.length; i++){
        let str = 1
        for(let j = 0; j<nums.length; j++){
            if(i != j){
                str = str * nums[j]
            }
        }
        out.push(str)
    }
    
    return out
};