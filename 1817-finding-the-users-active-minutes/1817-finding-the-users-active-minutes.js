/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let m = new Map()
    for(let i = 0; i<logs.length; i++){
        if(m.has(logs[i][0])){
            let s = m.get(logs[i][0])
            s.add(logs[i][1])
            m.set(logs[i][0], s)
        }else{
            let s = new Set()
            s.add(logs[i][1])
            m.set(logs[i][0], s)
        }
    }
    
    let uam = new Map()
    for(let i = 1; i<=k; i++){
        uam.set(i, 0)
    }
    
    for(let [key, value] of m){
        let len = [...value].length
        let inc = uam.get(len)
        uam.set(len, inc+1)
    }
    
    return [...uam.values()]
    
};