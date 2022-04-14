/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
      let newArrWithTarget = nums;
    
        for(let i = 0; i<nums.length; i++){
                
                if(nums[i] === target){
                        
                        return i;       
                }
                        
           }
   

        
        newArrWithTarget.push(target)
          
        let newArrSorted =    newArrWithTarget.sort(function(a, b) {
                return a - b;
                });
        
        console.log(newArrSorted)
        return newArrSorted.indexOf(target);
                
        
};