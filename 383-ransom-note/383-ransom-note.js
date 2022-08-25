/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let m = new Map()
    for(let i = 0; i<magazine.length; i++){
        if(m.has(magazine[i])){
            let inc = m.get(magazine[i])
            m.set(magazine[i], inc+1)
        }else{
            m.set(magazine[i], 1)
        }
    }
    
    for(let i = 0; i<ransomNote.length; i++){
        if(m.has(ransomNote[i])){
            if(m.get(ransomNote[i])>0){
               let inc = m.get(ransomNote[i])
               m.set(ransomNote[i], inc-1)
             }else{
                 return false
             }
        }
        else{
            return false
        }
    }
    
    return true
};