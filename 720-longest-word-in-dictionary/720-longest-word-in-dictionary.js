/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    
    let s = new Set(words)
    let out = []
    words.forEach(word => {
        let sub = ''
        let len = word.length
        for(let i = 0; i<word.length; i++){
            sub=sub+word[i]
            if(s.has(sub)) len--
        }
        if(len == 0){
           out.push(sub) 
        }
    })
    
    let m = new Map()
    for(let x of out){
        m.set(x, x.length)
    }
    
    const sortedMap = new Map([...m].sort((a, b) => a[1] == b[1] ? b[0] -  a[0] : b[1] - a[1]))
    let final = []
    let prevLen = 0
    for(let [key, value] of sortedMap){
        if(prevLen<=value){
            final.push(key)
            prevLen = value
        }
    }
    
    final.sort()
    return final.length == 0 ? '' : final[0]
    
    
};