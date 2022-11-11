/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    let m = new Map()
    let temp
    for(let i = 0; i<nums.length; i++){
        m.set(nums[i], m.get(nums[i]) == null ? 1 : m.get(nums[i]) + 1)
    }
    
    for(let [key, value] of m){
        if(value === 1){
            return key
        }
    }
    
};