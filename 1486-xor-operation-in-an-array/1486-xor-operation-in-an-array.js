/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let count = start + 2 * 0;
    for(let i = 1; i<n; i++){
            count = count ^ (start + 2 * i)
    }
        
    return count
};