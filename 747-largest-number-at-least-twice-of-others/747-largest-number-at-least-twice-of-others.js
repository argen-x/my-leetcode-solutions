/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
    let maxNum = nums[0]
    for(let i = 1; i<nums.length; i++){
        if(maxNum <= nums[i]) maxNum = nums[i]
    }
    
    for(let i = 0; i<nums.length; i++){
        if(maxNum != nums[i] && nums[i]*2 > maxNum){
            return -1
        }
    }
    
    return nums.indexOf(maxNum)
};