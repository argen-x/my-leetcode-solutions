/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
   
    const abc = [...'abcdefghijklmnopqrstuvwxyz']
    
    let first = []
        
    firstWord.split('').forEach(el => {
        first.push(abc.indexOf(el).toString())
    })
        
    let sec = []
    
    secondWord.split('').forEach(el => {
        sec.push(abc.indexOf(el).toString())
            
    })
    let third = []
        
        targetWord.split('').forEach(el => {
        third.push(abc.indexOf(el).toString())
    })
    
    
        
   return Number(first.join('')) + Number(sec.join('')) == Number(third.join(''))
};