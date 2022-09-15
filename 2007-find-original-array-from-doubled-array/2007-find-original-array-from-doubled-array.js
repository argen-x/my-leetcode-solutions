/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    
    let m = new Map()
    changed.forEach(item => {
        m.set(item, m.get(item) == null ? 1 : m.get(item)+1)
    })
    
    changed.sort((a, b) => a - b)
    
    let res = []
    changed.forEach((item) => {
        if(m.has(item*2) && m.get(item) > 0){
            if(m.get(item*2)>0){
                res.push(item)
                m.set(item*2, m.get(item*2)-1)
                m.set(item, m.get(item)-1)
            }
        }
    })
    
    let len = changed.length
    let count = 0
    for(let [key, value] of m){
        if(value>0) count++
    }
    
    if(count>0) return []
    
    if(res.length == len/2) return res
    
    return []
    
};