/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
    const abc = [...'abcdefghijklmnopqrstuvwxyz']
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    let m = new Map()
    for(let i = 0; i<26; i++){
        m.set(abc[i], morse[i])
    }
    
    let s = new Set()
    for(let i = 0; i<words.length; i++){
        let out = ''
        for(let j = 0; j<words[i].length; j++){
            out+=m.get(words[i][j])
        }
        s.add(out)
        
    }
    
    let arr = Array.from(s)
    return arr.length
    
};