/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let out = []
    let m = new Map()
    
    for(let i = 0; i<temperatures.length; i++){
            let nextDay = i
            let endLoop = false, foundItem = false
            let count = 0
            
            while(!endLoop && nextDay<temperatures.length){
                nextDay++
                count++
                if(temperatures[i]<temperatures[nextDay]){
                    endLoop = true
                    foundItem = true
                    break
                }
            }
        count = foundItem ? count : 0
        
        out.push(count)
        
    }
    
    return out
    
};