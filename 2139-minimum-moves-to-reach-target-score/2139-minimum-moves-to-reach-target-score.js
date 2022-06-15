/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    
    let start = target
    let count = 0
    
    if(maxDoubles == 0) {
        return start-1
    }
    
    while(start > 1){
        
        if(start % 2 === 0 && maxDoubles>0){
            start /=2
            maxDoubles--
        }else{
            start--
        }
        
        count++
        
    }
    
    return count
};