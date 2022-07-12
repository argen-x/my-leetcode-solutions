/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
    
    if(s.length < k) return reverseStr(s)
    
    
    let str = ''
    let start = 0
    
    while(start < s.length){
        
        let sub = s.substring(start, start+k)
        str+=reverseStr(sub)
        let subPre = s.substring(start+k, start+2*k)
        str+=subPre
        
        start+=(2*k)
        
    }
    
    return str
    
    function reverseStr(subStr){
        
        let strOut = ''
        for(let i = subStr.length-1; i>=0; i--){
            strOut += subStr[i]
        }

        return strOut
    }
    
};