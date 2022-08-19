/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let m = new Map()
    let mx = Math.max(...nums)
    let s = new Set()
    for(let i = 1; i<=mx; i++){
        s.add(i)
    }
    
    nums.forEach(num => {
        m.set(num, m.get(num) == null ? 1: m.get(num)+1)
        if(s.has(num)) s.delete(num)
    })
    let arr = Array.from(s)
    for(let [key, value] of m){
        if(value>=2){
            return [key, arr.length > 0 ? arr[0] : mx+1]
        }
    }
};