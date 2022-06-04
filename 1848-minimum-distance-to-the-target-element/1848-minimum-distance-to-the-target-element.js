/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    
    let minAbs
    let m = new Map()
    for(let k = 0; k<nums.length; k++){
        if(nums[k] == target){
            let absIns = Math.abs(k-start)
            m.set(k, absIns)
            minAbs = absIns
        }
    }
    
    for (let [key, value] of m) {
      console.log(key, value)
      if(minAbs >= value){
          minAbs = value
      }
    }
    return minAbs
};