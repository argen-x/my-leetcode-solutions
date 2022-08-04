/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let s_map = new Map()
    let s_arr = s.split('')
    let tot_set = new Set()
    s_arr.forEach((char) => {
            if(s_map.has(char)){
                    let inc = s_map.get(char)
                    s_map.set(char, inc+1)
            }else{
                    s_map.set(char, 1)
            }
            tot_set.add(char)
    })
    
    let t_map = new Map()
    let t_arr = t.split('')
    t_arr.forEach((char) => {
            if(t_map.has(char)){
                    let inc = t_map.get(char)
                    t_map.set(char, inc+1)
            }else{
                    t_map.set(char, 1)
            }
            tot_set.add(char)
    })
    
    let output = 0
    tot_set.forEach(el => {
            //for s_map
            let s_freq = s_map.has(el)? s_map.get(el) : 0
            
            //for t_map
            let t_freq = t_map.has(el)? t_map.get(el) : 0
            
            //checking the total_difference
            output+=Math.abs(s_freq - t_freq)
    })    
        
    return output
};