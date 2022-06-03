/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let arr = []
    nums.forEach(el => {
        let toStr = el.toString();
        if((toStr.length % 2) == 0){
            arr.push(el)
        }
    })
    
    return arr.length
};