/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    let sum = 0, count = 0
    let m = new Map()
    m.set(0, 1)
    nums.forEach(num => {
      sum+=num
      if(m.get(sum-k) != null){
        count+=m.get(sum-k)
      }
      m.set(sum, m.get(sum) == null ? 1 : m.get(sum)+1)
    })

    return count

};