/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

    let arr =  []
    for(let i = left; i<=right; i++){
        if(isDivisible(i)) arr.push(i)
    }

    return arr
    
};

function isDivisible(number){

    let num = number
    while(num){
        if(number % (num%10) != 0) return false
        num = Math.floor(num/10)
    }

    return true

}