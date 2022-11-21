/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    
    
    let len = colors.length, start = 0, end = len -1
    
    while(colors[0] == colors[end]) end--
    while(colors[len-1] == colors[start]) start++
    
    return Math.max(len-1-start, end)
    
};