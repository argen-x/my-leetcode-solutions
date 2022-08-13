/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    let m = new Map()
    nums.forEach(num => {
        if(m.has(num)){
            let inc = m.get(num)
            m.set(num, inc+1)
        }else{
            m.set(num, 1)
        }
    })
    
    let ret = []
    for(let [key, value] of m){
        if(value == 1 && !m.has(key+1) && !m.has(key-1)){
                ret.push(key)
        }
        
    }
    
    return ret
}; 