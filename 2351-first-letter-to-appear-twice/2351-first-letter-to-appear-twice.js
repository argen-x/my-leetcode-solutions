/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    s_arr = s.split('')
    x_arr = []
        
        
    for(let i = 0; i<s_arr.length; i++){
            if(x_arr.includes(s_arr[i])){
                    return s_arr[i]
            }
            
            x_arr.push(s_arr[i])
    }    
        
        
        
};