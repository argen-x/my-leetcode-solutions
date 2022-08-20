/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    let mx_target = Math.max(...arr)  
    return arr.indexOf(mx_target)
};