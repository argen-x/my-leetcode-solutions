/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const newNums = [];
    newNums.push(nums[0]);
    
    for(let i = 1; i < nums.length; i++){
        newNums.push(nums[i]+newNums[i-1]);
    }
    return newNums;    
};