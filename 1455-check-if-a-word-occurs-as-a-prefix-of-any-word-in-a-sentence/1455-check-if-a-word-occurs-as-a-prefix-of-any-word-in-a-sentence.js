/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
        
    let sentenceSplit = sentence.split(" ")
   
    
    for(let i = 0; i<sentenceSplit.length; i++){
            
            if(sentenceSplit[i].startsWith(searchWord)){
               
               return i+1;
               
               }
            
    }
        
    return -1;
};