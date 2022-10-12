/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let p1 = 0, p2 = 0
    let maxLen = Math.max(word1.length, word2.length)
    let res = ''
    
    while(maxLen){
        
        if(p1 < word1.length){
            res+=word1[p1]
            p1++
        }
        if(p2 < word2.length){
            res+=word2[p2]
            p2++
        }  
        maxLen--
    }
    
    return res
    
};