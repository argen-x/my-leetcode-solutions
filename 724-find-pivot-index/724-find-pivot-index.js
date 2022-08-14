/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let tot = 0
    nums.forEach(el => tot+=el)
    
    let m = new Map()
    let preSum = tot
    for(let i = nums.length-1; i>=0; i--){
        preSum -= nums[i]
        m.set(i, preSum)
    }
    
    for(let i = 0; i<nums.length; i++){
        let prefixSum = m.get(i)
        let rightPrefixSum = tot-prefixSum-nums[i]
        if(prefixSum === rightPrefixSum) return i
    }
    
    return -1
    
};