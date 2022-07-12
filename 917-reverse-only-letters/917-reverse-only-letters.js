/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    
    const abc = new Set([...'abcdefghijklmnopqrstuvwxyz'])
    const str = []
    for(let i = s.length-1; i>=0; i--){
        if(abc.has(s[i].toLowerCase())) str.push(s[i])
    }
    
    for(let i = 0; i<s.length; i++){
        if(!abc.has(s[i].toLowerCase())) str.splice(i, 0, s[i])
    }
    
    return str.join('')
    
    
};