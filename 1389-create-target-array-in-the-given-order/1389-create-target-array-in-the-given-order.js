/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    
        let empty = []
        for(let i = 0; i<nums.length; i++){
                empty.splice(index[i], 0, nums[i] )
        }
        return empty;
};