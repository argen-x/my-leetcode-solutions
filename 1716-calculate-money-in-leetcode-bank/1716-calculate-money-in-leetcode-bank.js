/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    
    let output = 0;
    let total = n;
    let blocks = (n % 7 === 0) ? (n/7) : (n-(n % 7))/7+1
    let startMoney = 1
    for(let i = 0; i<blocks; i++){
        for(let j = 0; j<7; j++){
            output= output + startMoney + j;            
            total--;
            if(total === 0){
                break;
            }
        }
        startMoney++;
    }
    
    return output
    
};