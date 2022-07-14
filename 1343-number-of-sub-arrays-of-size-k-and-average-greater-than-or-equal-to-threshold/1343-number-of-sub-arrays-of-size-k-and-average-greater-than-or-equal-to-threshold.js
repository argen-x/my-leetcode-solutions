/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    
       let tempAverage = 0
        
       let count = 0
       for(let i = 0; i<k; i++){
           tempAverage+=arr[i]   
       }
       
       if(tempAverage/k >= threshold) count++
        
       for(let i = k; i<arr.length; i++){
           tempAverage =  tempAverage - arr[i-k] + arr[i]
           if(tempAverage/k >= threshold) count++
       }
       
        
       return count
        
};