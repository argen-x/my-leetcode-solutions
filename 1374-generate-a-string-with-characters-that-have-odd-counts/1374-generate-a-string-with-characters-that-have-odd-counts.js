/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let abc = [...('ab')]
    let output = []
    if(n%2==0){
       for(let i=0; i<n-1;i++){
           output.push(abc[0])
       }
        output.push(abc[1])
        return output.join('')
    }else{
        for(let j = 0; j<n; j++){
            output.push(abc[0])
        }
        return output.join('')
    }
    
};