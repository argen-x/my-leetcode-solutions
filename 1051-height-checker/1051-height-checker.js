/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expOrd = heights.map(h => h), count = 0
    expOrd.sort((a,b) => a-b)
    console.log(expOrd)
    console.log(heights)
    for(let i = 0; i<heights.length; i++){
        if(heights[i] != expOrd[i]) count++
    }
    return count
};