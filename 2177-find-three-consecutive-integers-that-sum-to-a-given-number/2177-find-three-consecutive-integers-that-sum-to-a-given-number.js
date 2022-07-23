/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    
        if(num%3 != 0) return []
        const x = getX(num)
        return [x-1, x, x+1]   
        
        function getX(num){
                return num/3
        }
        
        
};