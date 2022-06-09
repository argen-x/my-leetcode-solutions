/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
        
        let totalSteps = 0     
        for(let i = 1; i<points.length; i++){          
                let x_axis = Math.abs(points[i][0] - points[i-1][0])
                let y_axis = Math.abs(points[i][1] - points[i-1][1])                
                totalSteps = totalSteps + Math.max(x_axis, y_axis)          
        }
        return totalSteps
    
};