/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let s_arr = s.split('')
    let t_arr = t.split('')
    let arr = []
    for(let i = t_arr.length-1; i>=0; i--){
        if(s_arr.length>0){
            if(s_arr[s_arr.length-1] == t_arr[i]){
                s_arr.pop()
            }
        }
    }
    
    if(s_arr.length == 0) return true
    return false
    
};