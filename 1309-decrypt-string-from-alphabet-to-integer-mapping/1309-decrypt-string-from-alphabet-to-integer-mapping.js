/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    
    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    let output = []
    
    for(let i = 0; i<s.length; i++){
        if(s[i+2] == '#' && /\d/.test(s[i]) && /\d/.test(s[i+1])){
            let ind = Number(s[i]+s[i+1])
            output.push(abc[ind-1])
        }else if(s[i+1] != '#'){
            let ind = Number(s[i])
            output.push(abc[ind-1])
        } 
    }
    
    return output.join('')
    
};