/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    
    let cap = capacity
    let steps = 0
    for(let i = 0; i<plants.length; i++){
        if(plants[i] <= cap){
            cap-=plants[i]
            steps++
        }else{
            steps=steps+(i*2)+1
            cap=capacity
            cap-=plants[i]
        }    
    }
    
    return steps
    
};