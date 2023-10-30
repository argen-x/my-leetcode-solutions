/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    
    let res = []
    arr.forEach(el => {
        res.push([el, countSetBits(el)])
    })
    res.sort((a, b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1])

    for(let i = 0; i<res.length; i++){
        arr[i] = res[i][0]
    }

    return arr
  
    




};

 /* Function to get no of set bits in binary
   representation of positive integer n */
function countSetBits(n){
     var count = 0;
     while (n){
       count += n & 1;
       n >>= 1;
     }
     return count;
}