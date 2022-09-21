/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    
    let t = 0
    
    for(let i = 0; i<typed.length; i++){
        
        if(name[t] === typed[i]){
            t++
        }else if(name[t-1] === typed[i]){
            continue
        }else{
            return false
        }
    }
    
    return t === name.length
    
    
};