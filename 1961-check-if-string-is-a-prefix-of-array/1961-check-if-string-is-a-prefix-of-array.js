/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    
    let s2 = ''
    for(let w of words){
        s2+=w;
        if(s2 == s){
            return true
        }
    }
    
    return false
    
};