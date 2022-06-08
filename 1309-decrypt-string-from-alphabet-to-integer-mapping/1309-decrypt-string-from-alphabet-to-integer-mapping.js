/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    
    const abc = [...('abcdefghijklmnopqrstuvwxyz')]
    
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