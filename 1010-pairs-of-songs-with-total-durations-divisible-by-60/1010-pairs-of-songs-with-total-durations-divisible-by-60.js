/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    
    let res = 0
    for(let i = 0; i<time.length; i++){
        for(let j = i+1; j<time.length; j++){
            let sum = time[i]+time[j]
            if(sum % 60 == 0) res++
        }
    }
    
    return res
};