/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    let m = new Map()
    let m2 = new Map()
    for(let i = 0; i<s.length; i++){
        if(m.has(s[i])){
            let x = m.get(s[i])
            x++
            m.set(s[i], x)
            
            //at the same time add 
            let inn = m2.get(s[i])
            inn.push(s[i])
            m2.set(s[i], inn)
        }else{
            m.set(s[i], 1)
            
            let inn = []
            inn.push(s[i])
            m2.set(s[i], inn)
        }
    }
    
    const sortM1 = new Map([...m].sort((a, b) => b[1] - a[1]));
    
    let out = []
    for(let [key, value] of sortM1){
        out.push(m2.get(key).join(''))
    }
    
    return out.join('')
    
};