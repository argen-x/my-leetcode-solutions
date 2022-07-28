/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let answers = [];
    for(let i = 0; i<nums.length; i++){
            let dup = nums.filter(num => num == nums[i]);
            if(dup.length >= 2){
              return true;
              break;
            }
    }
    
    return false;

};