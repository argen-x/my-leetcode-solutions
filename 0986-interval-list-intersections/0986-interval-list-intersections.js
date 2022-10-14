/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    
    let lenFirst = firstList.length, lenSecond = secondList.length
    
    if(lenFirst == 0 || lenSecond == 0) return []
    let first = 0, second = 0
    let res = []
    while(first < lenFirst && second < lenSecond){
        let low = Math.max(firstList[first][0], secondList[second][0])
        let high = Math.min(firstList[first][1], secondList[second][1])
        
        if(low <= high){
            res.push([low, high])
        }
        
        if(firstList[first][1] < secondList[second][1]){
            first++
        }else{
            second++
        }

    }
    
    return res
    
    
};