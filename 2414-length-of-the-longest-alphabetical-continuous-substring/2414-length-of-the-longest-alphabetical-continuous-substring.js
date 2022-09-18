/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {

    let max = 1, 
        temp = 1
    
    
    let m = new Map()
    let idx = 1;
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(l => {
        m.set(l, idx)
        idx++
    })
    
    for(let i = 1; i<s.length; i++){
        if(m.get(s[i]) == m.get(s[i-1])+1){
            temp++
            max = Math.max(temp, max)
        }else{
            temp = 1
        }
    }
    max = Math.max(max, temp)

    return max
    
};