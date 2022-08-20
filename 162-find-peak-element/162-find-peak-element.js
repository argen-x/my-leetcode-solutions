/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let mx = Math.max(...nums)
    return nums.indexOf(mx)
};