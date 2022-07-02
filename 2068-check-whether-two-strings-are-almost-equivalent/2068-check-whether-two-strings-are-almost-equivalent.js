/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    
    let m1 = new Map()
    let m2 = new Map()
    
    for(let i = 0; i<word1.length; i++){
        if(m1.has(word1[i])){
            let x = m1.get(word1[i])
            x++
            m1.set(word1[i], x)
        }else{
            m1.set(word1[i], 1)
        }
        
        if(m2.has(word2[i])){
            let x = m2.get(word2[i])
            x++
            m2.set(word2[i], x)
        }else{
            m2.set(word2[i], 1)
        }        
    }
    

    
    for(let [key, value] of m1){
        if(m2.has(key)){
           let diff = Math.abs(m2.get(key) - value) 
           if(diff > 3) return false
        }else{
            if(value > 3) return false
        }
    }
    
    
    for(let [key, value] of m2){
        if(m1.has(key)){
           let diff = Math.abs(m1.get(key) - value) 
           if(diff > 3) return false
        }else{
            if(value > 3) return false
        }
        
    }
    
    return true
};