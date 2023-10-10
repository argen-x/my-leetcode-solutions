/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let res = []
    for(let i = 0; i<s.length; i++){
        if(s.charAt(i) == c){
            res.push(i)
        }
    }

    let out = []
    for(let i = 0; i<s.length; i++){
        if(s.charAt(i) == c){
            out.push(0)
        }else{
            let mn = Math.abs(i - res[0])
            for(let r of res){
                mn = Math.min(Math.abs(i - r), mn)
            }
            out.push(mn)
        }
    }

    return out
};