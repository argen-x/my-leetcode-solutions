/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    
    asteroids.sort((a, b) => a - b)
    for(let ast of asteroids){
        if(ast <= mass){
            mass+=ast
        }else{
            return false
            
        }
    }
    
    return true
    
};