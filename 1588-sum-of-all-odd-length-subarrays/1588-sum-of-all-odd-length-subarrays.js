/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    
    let n = arr.length
    let total = 0
    for(let i = 0; i<n; i++){
        for(let j = 0; j<n+1; j++){
            let len = (arr.slice(i, j)).length;
            if(len%2 != 0){
                let arrIn = arr.slice(i, j)
                for(a of arrIn){
                    total = total+a;
                }
            }
        }
    }
    
 
    return total
    
};