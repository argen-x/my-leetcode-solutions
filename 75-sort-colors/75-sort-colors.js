/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    
    //Tryna Implement the BubbleSort
    let noSwaps
    for(let i = nums.length; i>0; i--){
        noSwaps=true
        //Just to save time, we will not check the sorted items in the end
        for(let j = 0; j<i-1; j++){
            //Check two items, if not equal swap.
            if(nums[j] > nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
                noSwaps = false
            }
        }
        
        //in order to prevent the unneccessary looping.
        if(noSwaps) break
    }
    
    return nums
};