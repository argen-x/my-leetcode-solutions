/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    
    let count = 0
    patterns.forEach(pattern => {
        if(word.includes(pattern)){
            count++;
        }
    })
    
    return count;
};