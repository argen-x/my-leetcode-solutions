/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
    const total = []
    for(let x of arr){
        if(x == 0){
            total.push(x)
            total.push(x)
        }else{
            total.push(x)
        }
    }
    
    for(let i = 0; i<arr.length; i++){
        arr[i] = total[i]
    }
    
};