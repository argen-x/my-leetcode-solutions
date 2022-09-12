/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
    
    if(num == 0) return 0
    
    //if the num is positive
    if(num>0){
    
      let nums = num.toString().split('').map(el => Number(el))
        
      let first_arr = nums.filter(el => el!=0)
      let first = Math.min(...first_arr)
      let firstInd = nums.indexOf(first)
      let arr_toSort = []
      
      for(let i = 0; i<nums.length; i++){
          if(i != firstInd){
              arr_toSort.push(nums[i])
          }
      }
      
      arr_toSort.sort((a, b) => a-b)
      arr_toSort.unshift(first)
        
      return Number(arr_toSort.join(''))
        
    //if the num is negative    
    }else{
      
      let num_ngtv = num.toString().split('')
      num_ngtv.shift();
        
      let nums = num_ngtv.map(el => Number(el))
        
        
      let first_arr = nums.filter(el => el!=0)
      let first = Math.max(...first_arr) 
      let firstInd = nums.indexOf(first)
      let arr_toSort = []
      for(let i = 0; i<nums.length; i++){
          if(i != firstInd){
              arr_toSort.push(nums[i])
          }
      }
        
      
      arr_toSort.sort((a, b) => b - a)
      arr_toSort.unshift(first)
        
     return -Number(arr_toSort.join(''))
        
    }

    
};