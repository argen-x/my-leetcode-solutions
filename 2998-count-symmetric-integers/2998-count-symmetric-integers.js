/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    
    let count = 0
    for(let i = low; i<=high; i++){

        let len = Math.log(i) * Math.LOG10E + 1 | 0;  // for positive integers
        if(len % 2 == 0 ){
             if(arePartsEqual(i, len)){
                count++
            }
        }

    }

    return count

    function arePartsEqual(number, len){

        let n = len
        let num = 0
        while (number > 0) {
            let lastDigit = number % 10;
            if(len/2 < n){
                num+=lastDigit
            }else{
                num-=lastDigit
            }
            n--
            number = Math.floor(number / 10);
        }
        return num == 0
    }


 

};