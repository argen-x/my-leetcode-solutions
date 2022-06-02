/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
        
        let precount = 0;
        let count = 0;
        
        for(let i = 0; i<nums.length; i++){
                if(nums[i] === 1){
                        precount++;
                        if(count<=precount){
                           count = precount;      
                        }
                }else{
                        if(count<=precount){
                           count = precount;     
                        }
                        precount = 0;
                }
        }
        
        return count;
};