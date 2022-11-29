/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    
    let m = grid.length, n = grid[0].length
    let row_ones = Array(m).fill(0), col_ones = Array(n).fill(0)
    
    //Row count
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(grid[i][j] == 1) row_ones[i]++
        }
    }
    
    //Column count
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(grid[j][i] == 1) col_ones[i]++
        }
    }
    
    //Final assigning
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            grid[i][j]=row_ones[i]+col_ones[j]-(m-row_ones[i])-(n-col_ones[j]);
        }
    }
    return grid;
    
};