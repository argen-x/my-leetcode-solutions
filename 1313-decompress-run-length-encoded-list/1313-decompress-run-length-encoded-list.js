/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
        let decArr = [];
        for(let i=0 ; i<nums.length; i+=2){
                console.log(nums[i], nums[i+1])
                for(let j = 0; j< nums[i]; j++){
                   decArr.push(nums[i+1])    
                }
        }
        return decArr;
        
};