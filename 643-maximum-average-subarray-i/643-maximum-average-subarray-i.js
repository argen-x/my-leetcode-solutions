/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
        let maxAvg = 0, tempAvg = 0
        for(let i = 0; i<k; i++){
                maxAvg+=nums[i]
        }
        
        tempAvg = maxAvg
        for(let i = k; i<nums.length; i++ ){
                tempAvg = tempAvg - nums[i-k] + nums[i]
                maxAvg = Math.max(tempAvg, maxAvg)
        }
        
        return maxAvg/k
        
};