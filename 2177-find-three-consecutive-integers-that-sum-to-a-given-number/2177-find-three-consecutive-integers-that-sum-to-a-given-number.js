/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    
        if(num%3 != 0) return []
        const x = num/3
        return [x-1, x, x+1]   
        
        
        
        
};