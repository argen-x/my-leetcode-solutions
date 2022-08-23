/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   
    let m = new Map()
    for(let i = 0; i<nums.length; i++){
        if(m.has(nums[i])){
            let abs = Math.abs(i -  m.get(nums[i]))
            if(abs <= k) return true
        }
        m.set(nums[i], i)
    }
    
    return false
};