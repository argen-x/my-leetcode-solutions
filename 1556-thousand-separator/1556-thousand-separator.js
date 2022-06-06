/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    
    
    let arr = (n.toString()).split('');
    console.log(arr)
    let l = arr.length;
    if(l<=3){
        return arr.join('')
    }
    
    let nArr = []
    let iterator = 0
    for(let i = l-1; i>=0; i--){
        if(iterator === 3){
            nArr.push('.')
            iterator = 0
        }
        nArr.push(arr[i]);
        iterator++
    }
    
    return nArr.reverse().join('')
    
    
};