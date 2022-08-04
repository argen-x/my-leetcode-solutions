/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let tot_set = new Set()
    let t_map = new Map(), s_map = new Map()
    for(let i = 0; i<s.length; i++){
            
            tot_set.add(s[i])
            tot_set.add(t[i])
            
            if(s_map.has(s[i])){
                    let inc = s_map.get(s[i])
                    s_map.set(s[i], inc+1)
            }else{
                    s_map.set(s[i], 1)
            }
            
            if(t_map.has(t[i])){
                    let inc = t_map.get(t[i])
                    t_map.set(t[i], inc+1)
            }else{
                    t_map.set(t[i], 1)
            }
            
    }
        
        
    let final = 0    
    tot_set.forEach(char=>{
            let s_freq = s_map.has(char) ? s_map.get(char) : 0
            let t_freq = t_map.has(char) ? t_map.get(char) : 0
            if(t_freq<s_freq){
                    final+=Math.abs(s_freq-t_freq)
            }            
    })    
        
    return final    
    
    
};