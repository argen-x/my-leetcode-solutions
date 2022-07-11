/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
        let count = 0
        grid.forEach(item => {
                item.forEach(i => {
                        if(i<0) count++
                })
        })
        
        return count
        
};