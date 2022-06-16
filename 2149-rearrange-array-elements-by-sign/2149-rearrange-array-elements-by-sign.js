/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let ngtv = [], pstv = [], final = []
    nums.forEach(a => a < 0 ? ngtv.push(a) : pstv.push(a))
    for(let i = 0; i<ngtv.length; i++){
        final.push(pstv[i])
        final.push(ngtv[i])
    }
    
    return final
};