/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    let m = new Map()
    for(let i = 0; i<abc.length; i++){
        m.set(abc.charAt(i), i)
    }
    
    let res = s.split('')
    for(let i = 1; i<s.length; i+=2){
        let char = s.charAt(i-1)
        let num = Number(s.charAt(i))
        let newChar = abc.charAt(m.get(char) + num)
        res[i] = newChar
    }
    
    return res.join('')


    
};

