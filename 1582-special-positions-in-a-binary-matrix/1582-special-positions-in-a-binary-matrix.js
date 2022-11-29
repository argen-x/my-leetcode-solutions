/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    
    let m = mat.length, n = mat[0].length
    let row_ones = Array(m).fill(0), col_ones = Array(n).fill(0)
    let res = 0
    
    //Row ones finder
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(mat[i][j] == 1) row_ones[i]++
        }
    }
    
    //Row ones finder
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(mat[j][i] == 1) col_ones[i]++
        }
    }
    
    console.log(row_ones)
    console.log(col_ones)
    
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(mat[i][j] == 1 && row_ones[i] == 1 && col_ones[j] == 1) res++
        }
    }
    
    return res
    
};