/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    
       nums.sort((a, b) => a-b)
       let mn = nums[0], mx = nums[nums.length - 1]
       for(let i = mx; i>=0; i--){
               if(mn % i == 0 && mx % i == 0) return i
       }
        
};