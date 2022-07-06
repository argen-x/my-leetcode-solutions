/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
        let m = new Map()
        for(let x of nums){
                if(m.has(x)){
                    let inc = m.get(x)
                    m.set(x, inc+1)
                }else{
                    m.set(x, 1)    
                }
        }
        
        for(let [key, value] of m){
                if(value > 1) return key
        }
        
};