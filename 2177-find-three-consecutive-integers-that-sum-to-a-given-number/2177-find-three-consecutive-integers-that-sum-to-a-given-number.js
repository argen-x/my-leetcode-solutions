/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    
        if(num%3 == 0){
                let x = num/3
                return [x-1, x, x+1]
        }else{
                return []
        }
        
};