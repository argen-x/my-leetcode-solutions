/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    

    
    //counter for the absent
    let countA = 0
    
    //iterate over the attendance sheet.
    for(let i = 0; i<s.length; i++){       
        if(s[i] === 'A'){
            countA++
        }        
    }
    
    return countA <= 1 && !s.includes('LLL')
    
    
};