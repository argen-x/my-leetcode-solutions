/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    
    let stack = []
    let t_len = target.length
    let res = []
    for(let i = 1; i<=n; i++){
        if(stack.length == 0){
            stack.push(i)
            res.push('Push')

            let last_index = stack.length-1
            if(stack[last_index] != target[last_index]){
                res.push('Pop')
                stack.pop()
            }
            
        }else{

            stack.push(i)
            res.push('Push')

            let last_index = stack.length-1
            if(stack[last_index] != target[last_index]){
                res.push('Pop')
                stack.pop()
            }

        }

        if(t_len == stack.length){
            break;
        }
    }

    return res

};