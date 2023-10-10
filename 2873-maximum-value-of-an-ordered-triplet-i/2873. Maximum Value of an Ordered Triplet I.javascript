/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    
    let mx = 0
    for(let i = 0; i<nums.length-2; i++){
        for(let j = i+1; j<nums.length-1; j++){
            for(let k = j+1; k<nums.length; k++){
               let temp = (nums[i] - nums[j]) * nums[k] 
               if(temp > 0){
                   mx = Math.max(mx, temp)
               }
            }
        }
    }

    return mx

};