/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
   
    let kn = 0, left = 0, output = 0
    for(let right = 0; right<nums.length; right++){
        if(nums[right] == 0){
            kn++
        }
        
        if(kn > k){
            if(nums[left]==0){
                kn--
            }
            left++
        }
        
        output = Math.max(output, right-left+1)
    }
    
    return output
    
    
    
};