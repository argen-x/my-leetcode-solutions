/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    let occurMap = new Map()
    let ltrs = new Set()
    let ind = 0
    words.forEach(word => {
        let m = new Map()
        word.split('').forEach(ltr => {
            ltrs.add(ltr)
            if(m.has(ltr)){
                let inc = m.get(ltr)
                m.set(ltr, inc+1)
            }else{
                m.set(ltr, 1)
            }
        })
        occurMap.set(ind, m)
        ind++
    })
    
    let len = words.length
    let arr = Array.from(ltrs)
    let out = []
    arr.forEach(l => {
        let occur = []
        let finReach = len
        for(let i = 0; i<len; i++){
            if(occurMap.has(i)){
                if(occurMap.get(i).has(l)){
                    occur.push(occurMap.get(i).get(l))
                    finReach--
                }
            }
        }
        if(finReach == 0){
           let minOccur = Math.min(...occur)
           for(let j = 0; j<minOccur; j++){
               out.push(l)
           }
        }
        
    })
    
    
    return out
    
};