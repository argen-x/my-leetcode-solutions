/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    
    let nums = []    
    s.split(' ').forEach(el => {
            if(/\d/.test(el)){
                nums.push(Number(el));
        }
    })  
        
    for(let i = 1; i<nums.length; i++){
            if(nums[i] <= nums[i-1]){
                    return false
                    break;
            }
    }
        
    return true
};