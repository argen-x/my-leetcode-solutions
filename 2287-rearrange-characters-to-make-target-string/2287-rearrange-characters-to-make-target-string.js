/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    
        let m = new Map()
        s.split('').forEach(ltr => {
                if(m.has(ltr)){
                        let inc = m.get(ltr)
                        m.set(ltr, inc+1)
                }else{
                        m.set(ltr, 1)
                }
        })
        
        
        let t = new Map()
        target.split('').forEach(l => {
                if(t.has(l)){
                        let inc = t.get(l)
                        t.set(l, inc+1)
                }else{
                        t.set(l, 1)
                }
        })
        let out = []
        for(let [key, value] of t){
                if(m.has(key)){
                   let copies = Math.floor(m.get(key)/value)
                   out.push(copies)
                }else{
                        return 0
                }
        }
        
        return Math.min(...out)
        
        
        
};