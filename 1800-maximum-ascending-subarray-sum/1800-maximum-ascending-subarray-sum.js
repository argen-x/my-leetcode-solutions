/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    
    
    let sum = nums[0], max = nums[0]
    
    for(let i = 1; i<nums.length; i++){
        
        if(nums[i]<= nums[i-1]){
            sum = 0
        }
        
        sum+=nums[i]
        max = Math.max(max, sum)    
    }
    
    return max
};