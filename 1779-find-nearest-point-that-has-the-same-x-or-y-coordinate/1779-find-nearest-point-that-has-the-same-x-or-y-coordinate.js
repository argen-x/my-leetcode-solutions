/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    
    const m = new Map()
    
    for(let j = 0; j<points.length; j++)
    {
        let el = points[j]
        if(el[0] === x || el[1] === y){
            let dist = Math.abs(x-el[0]) + Math.abs(y-el[1])
            let i = j
            m.set(i, dist)
        }
    }

    let mAsc = new Map([...m].sort((a, b) => a-b));
    
    let [firstValue] = mAsc.values()
    let [firstKey] = mAsc.keys()
    
    for (const [key, value] of mAsc) {
        if(value < firstValue){            
            firstValue = value
            firstKey = key
        }
    }
    
    return firstKey == undefined ? -1 : firstKey
};