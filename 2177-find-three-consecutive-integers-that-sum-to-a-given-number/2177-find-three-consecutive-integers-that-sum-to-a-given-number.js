/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    
        if(num%3 != 0) return []    
        
        if(num%3 == 0){
                return [num/3-1, num/3, num/3+1]
        }
        
};