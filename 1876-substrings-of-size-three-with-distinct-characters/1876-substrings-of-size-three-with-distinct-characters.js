/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    
    let count = 0
    for(let i = 0; i<s.length-2; i++){
        let sub = s.substring(i, i+3)
        let setx = new Set([...sub])
        if([...setx].length == 3) count++
    }
    
    return count
    
};