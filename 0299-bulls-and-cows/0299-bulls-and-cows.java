/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    
    let m = new Map()
    let bulls = 0, cows = 0
    let arr = []
    for(let i = 0; i<secret.length; i++){
        
        if(secret[i] == guess[i]){
            bulls++
        }else{
            
            arr.push(guess[i])
            m.set(secret[i], m.get(secret[i]) == null ? 1 : m.get(secret[i])+1)
        }
    }
    console.table(m)
    for(let x of arr){
        if(m.get(x) > 0){
            cows++
            m.set(x, m.get(x) - 1)
        }
    }
    
    return `${bulls}A${cows}B`
    
};