/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    
     //   if(num%3 == 0){
     //           return [num/3-1, num/3, num/3+1]
     //   }
     //   return []
        
            if (num % 3 != 0) return [];

    const firstNum = calcFirstNum(num);
    return [firstNum, firstNum + 1, firstNum + 2];


    function calcFirstNum(num) {
        return (num - 3) / 3;
    }
        
};