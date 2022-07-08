/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    
    let out = []
    let mLicense = new Map()
    for(let i = 0; i<licensePlate.length; i++){
        let x = licensePlate[i].toUpperCase()
            if(isCharacterALetter(x)){
                if(mLicense.has(x)){
                let inc = mLicense.get(x)
                mLicense.set(x, inc+1)
            }else{
                mLicense.set(x, 1)
            } 
        }

    }
        
    words.forEach(word => {
        let inx = new Map()
        for(let i = 0; i<word.length; i++){
            let x = word[i].toUpperCase()
               if(inx.has(x)){
                    let inc = inx.get(x)
                    inx.set(x, inc+1)
                }else{
                    inx.set(x, 1)
                } 
            }
        

        let len = (Array.from(mLicense.keys())).length
        for(let [key, value]  of mLicense){
            if(inx.has(key)){
                if(inx.get(key) >= mLicense.get(key)){
                    len--
                }else{
                    break
                }
            }
        }
        if(len == 0){
            out.push(word)
        }
    })
    
    
    let m = new Map()
    
    for(let w of out){
        m.set(w, w.length)
    }
    
    let mSorted = new Map([...m].sort((a, b) => a[1] - b[1]))
    console.table(mSorted)
    
    let prevValue = Infinity
    let out2 = new Map()
    for(let [key, value] of mSorted){
        if(value<=prevValue){
            out2.set(key, words.indexOf(key))
            prevValue = value
        }else{
            break
        }
    }
    
    let out2Sorted = new Map([...out2].sort((a, b) => a[1] - b[1]))
    console.table(out2Sorted)
    
    let final = Array.from(out2Sorted.keys())
    
    return final[0]
    
    function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
    }
};