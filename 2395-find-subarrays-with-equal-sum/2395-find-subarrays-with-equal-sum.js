/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    
    let s = new Set()
    
    for(let i = 0; i<nums.length-1; i++){
        let sum = nums[i] + nums[i+1]
        if(s.has(sum)) return true
        s.add(sum)
    }
    
    return false
};