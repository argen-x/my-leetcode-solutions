/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    
    let maxStrongPair = null
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums.length; j++){
            if(Math.abs(nums[i]-nums[j]) <= Math.min(nums[i], nums[j])){
                let bitwiseXOR = nums[i] ^ nums[j]
                maxStrongPair = maxStrongPair == null ? bitwiseXOR : Math.max(bitwiseXOR, maxStrongPair)
            }
        }
    }

    return maxStrongPair

};