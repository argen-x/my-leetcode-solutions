/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

        
       const sorted = [...new Set(nums.sort((a, b)=> a-b))];        
       return sorted.length >=3 ? sorted[sorted.length-3] : sorted[sorted.length - 1]
        
};