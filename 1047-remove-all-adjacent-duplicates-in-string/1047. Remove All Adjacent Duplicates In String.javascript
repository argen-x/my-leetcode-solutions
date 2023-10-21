/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    
    let stack = []
    for(let n of s){
        if(stack != null && stack[stack.length-1] == n){
            stack.pop()
        }else{
            stack.push(n)
        }
    }

    return stack.join('')

};