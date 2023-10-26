/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let mx = Math.max(...nums)
    let sum = 0
    
    while(k>0){
        sum+=mx
        mx++
        k--
    }
    
    return sum
};