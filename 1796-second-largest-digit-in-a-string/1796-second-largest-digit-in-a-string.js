/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let out = []
    for(let i = 0; i<s.length; i++){
        if(/^\d+$/.test(s[i])){
            out.push(s[i])
        }
    }
    let s2 = Array.from(new Set(out)).sort((a,b) => b-a)
    
    return s2.length > 1 ? Number(s2[1]) : -1
};