/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    
   let matrix = new Array();
    
    //forming the base matrix
    for(let i = 0; i<m; i++){
        let inMatrix = []
        for(let j = 0; j<n; j++){
            inMatrix.push(0)
        }
        matrix.push(inMatrix)
    }
    
    
    //incrementing the main matrix - row
    let size = indices.length
	for(let [row, col] of indices){
        
       //increment col 
       for(let h=0; h<n; h++){
          matrix[row][h]++           
        }
        
       //increment row 
        for(let k=0; k<m; k++){
          matrix[k][col]++  
        }
        
    }
  
    let countOdd = 0
    for(let x = 0; x<matrix.length; x++){
        for(let y = 0; y<matrix[x].length; y++){
            if(matrix[x][y] % 2 != 0){
                countOdd++;
            }
        }
    }
    
    return countOdd
    
};