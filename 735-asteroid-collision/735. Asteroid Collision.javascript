/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

    if(asteroids == null || asteroids.length == 0) return []
    
    let stack = [asteroids[0]]
    for(let i = 1; i<asteroids.length; i++){
        let last = stack[stack.length-1]
        let cur = asteroids[i]
        if(last > 0 && cur < 0){
            //they collide with each other
            let abs_last = Math.abs(last)
            let abs_cur = Math.abs(cur)
            if(abs_last == abs_cur){
                stack.pop()
                stack = asteroidCollision(stack)
            }else if(abs_last < abs_cur){
                stack.pop()
                stack.push(cur)
                stack = asteroidCollision(stack)
            }
        }else{
            //stack will include the cur
            stack.push(cur)
        }
    }
    return stack

};