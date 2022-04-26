/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let matching = 0;
    let total = 0;
        
    for(let i = 0; i <s.length; i++){
            
            if(s[i]=='R'){
                matching++;       
            }else if(s[i]=='L'){
                matching--;
            }
            
            
            if(matching == 0){
               total++;
            }
    }
            
            return total;
    
};