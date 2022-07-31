/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    
    let operations = 0
    let endLoop = false;
    while(!endLoop){
        
        let isAllZero = nums.every(el => el == 0)
        if (isAllZero){
            endLoop = true;
            break
        } 
        
        operations++
        
        let min = Infinity
        nums.forEach(num => {
            if(num!=0 && min >= num){
                min = num
            }
        })
        
        nums = arrDecrease(nums, min)
       
    }
    
    return operations
    
    function arrDecrease(arr, x){
        
        let out = []
        arr.forEach(el => {
            if(el > 0){
                out.push(el-x)
            }else{
                out.push(el)
            }
        })
        
        return out
        
    }
    
    
};