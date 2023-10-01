/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    
    let s = new Set()
    for(let i = 1; i<=k; i++){
      s.add(i)
    }

    let n = 0
    while(nums){

      let popped = nums.pop()
      if(s.has(popped)) s.delete(popped)
      n++

      if(s == null || s.size == 0){
        return n
      }

    }

    return n

};