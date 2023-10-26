/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    
    let dist = Math.abs(nums[0])
    let real = nums[0]

    nums.forEach((num, index) => {
        if(index != 0){
            let abs = Math.abs(num)
            if(dist > abs){
                dist = abs
                real = num
            }else if(dist === abs && num > real){
                real = num                
            }
        }
    })

    return real
};