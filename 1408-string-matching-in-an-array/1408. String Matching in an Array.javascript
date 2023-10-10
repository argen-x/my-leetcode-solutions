/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    
    let res = new Set()
    for(let word of words){
        for(let sub of words){
            if(word !== sub && word.includes(sub)){
                res.add(sub)
            }
        }
    }

    return [...res]

};