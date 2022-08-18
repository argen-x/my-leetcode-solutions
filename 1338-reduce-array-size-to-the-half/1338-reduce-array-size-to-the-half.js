/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let m = new Map()
    arr.forEach(item => {
        if(m.has(item)){
            let inc = m.get(item)
            m.set(item, inc+1)
        }else{
            m.set(item, 1)
        }
    })
    
    let c = 0
    let m_sorted = new Map([...m].sort((a, b) => b[1] - a[1]))
    let n = arr.length
    let count = 0
    for(let [key, value] of m_sorted){
        
            if(count*2 >= n){
                break
            }else{
                count+=value
                c++
            }
        
    }
    
    return c
    
};