/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    
    let m = matrix.length, n = matrix[0].length
    for(let i = 0; i<m; i++){
        let s = new Set()
        for(let j = 0; j<n; j++){
            s.add(matrix[i][j])
        }
        if(s.size != m) return false
    }
    
    for(let i = 0; i<n; i++){
        let s = new Set()
        for(let j = 0; j<m; j++){
            s.add(matrix[j][i])
        }
        if(s.size != n) return false
    }
    
    return true
};