/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    
    let m = new Map()
    nums.forEach(num => m.set(num, m.get(num) == null ? 1 : m.get(num) + 1))
    console.log(m)
    let ops = 0
    for(let [key, value] of m){
      if(value == 1){
        return -1
      }else{
        ops+= Math.floor(value/3) + (value % 3 != 0 ? 1 : 0)
      }

    }

    return ops

};