/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    
    arr.sort((a,b) => a-b)    
    var len = arr.length, bound = arr.length * 0.05;
    for(let i = 0; i<bound; i++){
        arr.shift();
        arr.pop();
    }
    
    let total = 0;
    arr.forEach(a => total=total+a)   
    return total/arr.length
};