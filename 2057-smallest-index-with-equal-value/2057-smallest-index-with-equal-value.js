/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    
    let indices = []
    let n = nums.length
    
    for(let i = 0; i<n; i++){
        let mod = i%10
        if(mod == nums[i]){
            indices.push(i)
        }
    }
    
    return indices.length > 0 ? indices[0] : -1
    
};