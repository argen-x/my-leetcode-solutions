/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
    
    let sum = 0
    let m = new Set()
    let i = 1
    while(n){
        
        if(!m.has(k-i)){
           sum+=i
           m.add(i)
           n--
        }

        i++
    }

    return sum

};