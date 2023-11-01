/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {

    let prev = shifts[shifts.length-1]
    for(let i = shifts.length-2; i>=0; i--){
        prev+=shifts[i]
        shifts[i] = prev
    }

    let abc = 'abcdefghijklmnopqrstuvwxyz'
    
    let res = ''
    for(let i = 0; i<s.length; i++){
        let ind = (abc.indexOf(s.charAt(i)) + shifts[i]) % 26
        let char = abc.charAt(ind)
        res+=char
    }
    return res

};