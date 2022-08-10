/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let areSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));
    
    let s_map = new Map(), t_map = new Map()
    
    for(let i = 0; i<s.length; i++){
        if(s_map.has(s[i])){
            let s_set = s_map.get(s[i])
            s_map.set(s[i], s_set.add(i))
        }else{
            let s_set = new Set()
            s_map.set(s[i], s_set.add(i))
        }  
        
        if(t_map.has(t[i])){
            let t_set = t_map.get(t[i])
            t_map.set(t[i], t_set.add(i))
        }else{
            let t_set = new Set()
            t_map.set(t[i], t_set.add(i))
        }  
    }
    
    let s_arr = [...s_map.keys()], t_arr = [...t_map.keys()]
    for(let i = 0; i<s_arr.length; i++){
        let s_set = s_map.get(s_arr[i])
        let t_set = t_map.get(t_arr[i])
        let output = areSetsEqual(s_set, t_set)
        if(!output) return false
    }
    
    return true
    
};