/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arr = []
    for(arr_x of matrix){
        arr = arr.concat(arr_x)
    }
    arr.sort((a, b) => a - b)
    
    return arr[k-1]
    
    
};