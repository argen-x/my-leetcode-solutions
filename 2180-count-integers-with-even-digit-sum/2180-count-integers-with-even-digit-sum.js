/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    
    
    let count = 0
    for(let i = num; i>0; i--){
        let out = 0;
        [...(i.toString())].forEach(n => {
            out+=Number(n)
        })
        console.log(out)
        if(out % 2 == 0) count++
    }
    
    return count
    
};