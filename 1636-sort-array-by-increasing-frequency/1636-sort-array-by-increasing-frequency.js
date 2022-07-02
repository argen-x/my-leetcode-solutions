/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    
    let m = new Map(), mInc = new Map()
    
    nums.forEach(n => {
        if(m.has(n)){
            
            let inn = m.get(n)
            inn.push(n)
            m.set(n, inn)
            
            let incr = mInc.get(n)
            incr++
            mInc.set(n, incr)
            
        }else{
            let inn = []
            inn.push(n)
            m.set(n, inn)
            
            mInc.set(n, 1)
        }
    })
    
    let mIncSor = [...mInc.entries()].sort((a,b) => a[1]===b[1] ? b[0] - a[0] : a[1] - b[1])
    
    let out = []
    for(let [key, value] of mIncSor){
        let val = m.get(key)
        val.forEach(num => out.push(num))
    }
    
    return out
};