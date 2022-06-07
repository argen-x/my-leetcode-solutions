/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
        let t = text.split(' ')
        let n = t.length
        let o = []
        for(let i = 0; i<n-2; i++){
            if(t[i] === first && t[i+1] === second){
                o.push(t[i+2])
            }
        }
    
        return o
};