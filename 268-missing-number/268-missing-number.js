/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let range = nums.length+1
    let arr = []
    
    //creating array to compare
    for(let i = 0; i<range; i++){
        arr.push(i)
    }
    console.log(arr)
    
    
    //sort the nums and add different item
    nums.sort((a, b) => a-b)
    nums.push('x')
    console.log(nums)
    //finally compare
    for(let j = 0; j<range; j++){
        if(arr[j] !== nums[j]){
            return arr[j]
        }
    }
    
    
};