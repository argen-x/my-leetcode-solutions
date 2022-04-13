/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    
     let occurCount = 0;
        
     for(let i = 0; i<words.length; i++){
            
             if(words[i].startsWith(pref)){
                
                     occurCount++;     
                     
             }
     }
        
     return occurCount;
};