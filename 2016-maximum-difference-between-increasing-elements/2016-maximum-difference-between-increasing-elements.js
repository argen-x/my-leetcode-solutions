/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    
    let left = 0, right = 1, maxDiff = -1
    
    while(right < nums.length){
        if(nums[left] >= nums[right]){
            left = right
            right++
        }else{
            let tempDiff = nums[right] - nums[left]
            maxDiff = Math.max(tempDiff, maxDiff)
            right++
        }
    }
    
    return maxDiff
    
};