/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    
    let s = new Set()
    for(let word of words){
        for(let reverse of words){
            if(word !== reverse){
                let reversed = reverse.split('').reverse().join('')
                if(word === reversed){
                    s.add(word)
                }
            }
        }
    }

    return s.size/2

};