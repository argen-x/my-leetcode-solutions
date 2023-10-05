/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    

    let m = new Map()
    nums.forEach(num => m.set(num, m.get(num) == null ? 1 : m.get(num) + 1))

    let res = []
    let n = nums.length

    for(let [key, value] of m){
      if(value > n/3){
        res.push(key)
      }
    }

    return res

};