/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    
    let longestTask = logs[0][1]
    let m = new Map()
    m.set(logs[0][0], longestTask)
    for(let i = 1; i<logs.length; i++){
        let taskTime = logs[i][1] - logs[i-1][1]
        longestTask = Math.max(taskTime, longestTask)
        if(m.has(logs[i][0])){
            if(m.get(logs[i][0]) < taskTime){
                m.set(logs[i][0], taskTime)
            }
        }else{
            m.set(logs[i][0], taskTime)
        } 
    }
    
    let res = []
    for(let [key, value] of m){
        if(value >= longestTask) res.push(key)
    }
    
    if(res.length == 1) return res[0]
    res.sort((a, b) => a- b)
    return res[0]
    
};