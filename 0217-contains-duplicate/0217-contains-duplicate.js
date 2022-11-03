/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
        let m = new Map()
        nums.forEach(num => {
                if(m.has(num)){
                        let inc = m.get(num)
                        m.set(num, inc+1)
                }else{
                        m.set(num, 1)
                }
        })
        
        for(let [key, value] of m ){
                if(value>=2) return true
        }
        
        return false
};