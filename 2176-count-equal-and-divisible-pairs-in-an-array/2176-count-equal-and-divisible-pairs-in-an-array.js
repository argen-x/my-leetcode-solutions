/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    
    let count = 0
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            let m = (i*j)%k
            if(nums[i] === nums[j] && m === 0 ){
                count++
            }
        }
    }
    
    return count;
    
};