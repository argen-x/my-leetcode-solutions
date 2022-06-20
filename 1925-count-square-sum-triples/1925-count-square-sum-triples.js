/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    
    let count = 0;
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=n; j++){
            if(i!=j){
                if((i*i + j*j) <= n*n){
                    let c = Math.sqrt(i*i + j*j);
                    if (c % 1 == 0){
                        count++
                    }
                } 
            }
        }
    }
    
    return count;
};