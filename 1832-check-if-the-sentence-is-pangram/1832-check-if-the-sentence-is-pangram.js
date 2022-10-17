/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
        
     let abc = new Set([...('abcdefghijklmnopqrstuvwxyz')])
     for(let i = 0; i<sentence.length; i++){
         if(abc.has(sentence[i])){
                 abc.delete(sentence[i])
         }   
     }
        
     return [...(abc)].length == 0
        
       
};