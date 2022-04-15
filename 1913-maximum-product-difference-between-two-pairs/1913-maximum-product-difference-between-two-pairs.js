/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    
   let nums2 = nums.sort(function(a, b) {  return a - b;  })
        
   return (nums2[nums2.length-1] * nums2[nums2.length-2]) - (nums2[1] * nums2[0]) 
        
};