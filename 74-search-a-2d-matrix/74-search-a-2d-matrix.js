/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let arr = []
    matrix.forEach(m => arr.push(...m))
    
    let output = binarySearch(arr, target);
    
    if (output != -1) return true
    
    return false
    
    function binarySearch(arr, val) {
            let start = 0;
            let end = arr.length - 1;

            while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (arr[mid] === val) {
                return mid;
            }

            if (val < arr[mid]) {
                end = mid - 1;
            } else {
            start = mid + 1;
            }
        }
      return -1;
    }
    
};