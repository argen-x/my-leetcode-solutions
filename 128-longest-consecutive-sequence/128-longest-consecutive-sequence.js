/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
     
     let nums2 = Array.from(new Set(nums))
     nums2.sort((a, b) => a-b)

        
     if(nums2.length <= 1) return nums2.length 
        
     let prevLen = 1, count = 0   
     for(let i = 0; i<nums2.length-1; i++){
         if(nums2[i+1] == nums2[i]+1){
                 prevLen++
         }else{
                 if(count<=prevLen){
                         count = prevLen
                 }
                 prevLen = 1
         }    
     }  
        
     if(count<prevLen) count = prevLen   
     
     return count
        
        
};