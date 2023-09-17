/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    
    let res = 0
    nums.forEach((item,index) =>{
      if(countSetBits(index) == k){
        res+=item
      }
    })

    return res

};

function countSetBits(n)
   {
     var count = 0;
     while (n)
     {
       count += n & 1;
       n >>= 1;
     }
     return count;
   }