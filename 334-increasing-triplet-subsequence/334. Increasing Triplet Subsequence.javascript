/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
  let n = nums.length

  //Find the Left Min Array
  let lm = new Array(n).fill(0)
  let mn = nums[0]
  for(let i = 0; i<n; i++){
      mn = Math.min(mn, nums[i])
      lm[i] = mn
  }

  //Find the Right Max Array
  let rm = new Array(n).fill(0)
  let mx = nums[nums.length-1]
  for(let i = n-1; i>=0; i--){
      mx = Math.max(mx, nums[i])
      rm[i] = mx
  }

  for(let i = 0; i<n; i++){
    if(lm[i] < nums[i] && nums[i] < rm[i]){
      return true
    }
  }

  return false



};