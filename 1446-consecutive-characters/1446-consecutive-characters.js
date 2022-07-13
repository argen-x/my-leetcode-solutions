/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    
    if(s.length == 1) return 1
    
    let max = []
    let count = 1
    for(let i = 0; i<s.length-1; i++){
        if(s[i] != s[i+1]){
            max.push(count)
            count = 1
        }else{
            count++
        }
        max.push(count)
    }
    
    return Math.max(...max)
    
};