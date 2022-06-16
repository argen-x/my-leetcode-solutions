/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    
    let orig = original
    while(nums.includes(orig)){
        for(let x of nums){
            if(x==orig){
                orig*=2
                break
            }
        }
    }
    
    return orig
    
};