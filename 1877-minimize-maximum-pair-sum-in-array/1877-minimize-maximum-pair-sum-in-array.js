/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    
    nums.sort((a, b) => a-b)
    let low = 0, high = nums.length-1;
    let prevValue = 0
    while(low<high){
        let pair = nums[low] + nums[high]    
        if(pair>prevValue) prevValue = pair
        low++
        high--    
    }    
      
    return prevValue
};