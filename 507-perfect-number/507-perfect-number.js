/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    
    let divSum = 0;
    for(let i = 1; i<num; i++){
        if(num%i == 0){
           divSum+=i 
        }
    }
    
    
    return divSum == num
};