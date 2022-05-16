/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    
        nums.push.apply(nums, nums)        
        return nums
};