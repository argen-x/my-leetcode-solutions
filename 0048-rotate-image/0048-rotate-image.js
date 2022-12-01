/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    let res = []
    for(let i = 0; i<matrix.length; i++){
        let temp = []
        for(let j = 0; j<matrix.length; j++){
            temp.push(matrix[j][i])
        }
        res.push(temp)
    }
    
    for(let i = 0; i<matrix.length; i++){
        let left = 0, right = matrix.length-1
        while(left < right){
            let temp = res[i][right]
            res[i][right] = res[i][left]
            res[i][left] = temp
            left++
            right--
        }
    }
    
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix.length; j++){
            matrix[i][j] = res[i][j]
        }
    }
    
};