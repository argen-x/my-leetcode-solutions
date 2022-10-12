/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let left = 0, right = height.length-1
    let max = 0
    
    while(left < right){
        
        let leftLine = height[left],
            rightLine = height[right]
                
        let area = Math.min(leftLine, rightLine) * (right - left)
        
        max = Math.max(area, max)
        
        if(leftLine >= rightLine) right--
        else  left++
        
    }
    
    return max
    
};