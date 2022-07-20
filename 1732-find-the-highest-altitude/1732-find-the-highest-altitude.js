/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    let prevMax = 0, max = 0
    for(let i of gain){
        prevMax = prevMax + i
        if(max < prevMax) max = prevMax
    }
    
    return max
    
};