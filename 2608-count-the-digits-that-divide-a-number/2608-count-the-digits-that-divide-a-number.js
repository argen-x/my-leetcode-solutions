/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    
    let count = 0, number = num
    while(number){
           if(num % (number % 10) == 0) count++;
           number = Math.floor(number/10);
    }

    return count

};