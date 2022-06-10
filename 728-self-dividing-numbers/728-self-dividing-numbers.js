/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
    let out = []
    for(let i=left;i<=right; i++){
        let boolAccept = true;
        ((i.toString()).split('')).forEach(el => {
            let num = Number(el)
            if(i%num != 0){
                boolAccept = false;
            }     
        })
        if(boolAccept == true){
            out.push(i)
        }
    }
    
    return out
    
};