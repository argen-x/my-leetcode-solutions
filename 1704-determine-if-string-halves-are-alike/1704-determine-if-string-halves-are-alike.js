/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let s1 = s.substring(0, s.length/2), s2 = s.substring(s.length/2, s.length)
    let s1vowels = 0, s2vowels = 0
    s1.split('').forEach(char => {
        if(vowels.has(char)) s1vowels++
    })
    
    s2.split('').forEach(char => {
        if(vowels.has(char)) s2vowels++
    })
    
    
    return s1vowels == s2vowels
    
};