/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let m = new Map()
    for(let i = 0; i<s.length; i++){
        if(m.has(s[i])){
            let inn = m.get(s[i])
            inn.push(s[i])
            m.set(s[i], inn)
        }else{
            let inn = []
            inn.push(s[i])
            m.set(s[i], inn)
        }
    }
    
    for(let [key, value] of m){
        if(value.length == 1){
            return s.indexOf(key)
        }
    }
    
    return -1
};