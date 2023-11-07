/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let n = height.length
    let leftMax = height[0], rightMax = height[n-1]
    let arrLeft = new Array(n)
    let arrRight = new Array(n)

    //Construct the Left & Right Max at Current Position.
    for(let i = 0; i<n;  i++){
        leftMax = Math.max(height[i], leftMax)
        arrLeft[i] = leftMax
        rightMax = Math.max(height[n-i-1], rightMax)
        arrRight[n-i-1] = rightMax
    }

    let sum = 0
    for(let i = 0; i<n; i++){
        let cur = (Math.min(arrRight[i],arrLeft[i]) - height[i])
        sum+=cur<0? 0 : cur
    }
    
    return sum
    

};