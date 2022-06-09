/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
        
        
        let countLeast = []
        rectangles.forEach(el => {
                countLeast.push(Math.min(...el))
        })
        
        let count = 0
        countLeast.forEach(l => {
                let max = Math.max(...countLeast)
                if(max === l){
                        count++
                }
        })
        
        return count
    
};