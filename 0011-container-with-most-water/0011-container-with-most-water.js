/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let temp = 0
    let left = 0, right = height.length-1

    while(left < right){

        let curMin = Math.min(height[left], height[right])
        temp = Math.max(temp, curMin * (right-left))
        
        if(height[left] >= height[right]){
            right--
        }else{
            left++
        }
        
    }

    return temp
    
};