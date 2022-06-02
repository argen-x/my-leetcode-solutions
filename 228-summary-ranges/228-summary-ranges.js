/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    var arr = [];
    var n = nums.length;
    for(let i = 0 ; i<nums.length; i++){
        let j = i + 1;
        while(j < n && nums[j] == nums[j - 1] + 1) {
            j++;
        }
        if(j - 1 > i) {
            arr.push(`${nums[i]}->${nums[j-1]}`)
        }
        else{
            arr.push(`${nums[i]}`)
        }
        i = j - 1;
    }
    return arr;
};