/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    
    let numsSort = nums.sort((a, b) => a-b);
    
    for(let i = 0; i<numsSort.length; i=i+2){
        if(numsSort[i]!== numsSort[i+1]){
            return false;
        }
    }
        
    return true;
};