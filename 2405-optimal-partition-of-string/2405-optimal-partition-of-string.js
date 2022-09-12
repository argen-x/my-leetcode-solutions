/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    
    let set_arr = []
    let s_temp = []
    for(let i = 0; i<s.length; i++){
        if(!s_temp.includes(s[i])){
            s_temp.push(s[i])
        }else{
            set_arr.push(s_temp)
            s_temp = []
            s_temp.push(s[i])
        }
    }
    
    if(s_temp.length > 0) set_arr.push(s_temp)
    
    return set_arr.length
    
    
    
};