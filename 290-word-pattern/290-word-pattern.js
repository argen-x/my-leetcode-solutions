/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));
    
    let m_p = new Map()
    for(let i = 0; i<pattern.length; i++){
        if(m_p.has(pattern[i])){
            let arr = m_p.get(pattern[i])
            arr.add(i)
            m_p.set(pattern[i], arr)
        }else{
            let arr = new Set()
            arr.add(i)
            m_p.set(pattern[i], arr)
        }
    }
    
    
    let m_s = new Map()
    let arr = s.split(' ')
    arr.forEach((item, index) => {
        if(m_s.has(item)){
            let inc = m_s.get(item)
            inc.add(index)
            m_s.set(item, inc)
        }else{
            let inc = new Set()
            inc.add(index)
            m_s.set(item, inc)
        }
    })
    
    let arr_s = [...m_s.keys()]
    let arr_p = [...m_p.keys()]
    
    if(arr_s.length != arr_p.length){
        return false
    }else{
        for(let i = 0; i<arr_s.length; i++){
            let s_set =  m_s.get(arr_s[i]), p_set =  m_p.get(arr_p[i])
            const output = eqSet(s_set, p_set)
            if(!output) return false
        }
    }
    

    return true
    
};