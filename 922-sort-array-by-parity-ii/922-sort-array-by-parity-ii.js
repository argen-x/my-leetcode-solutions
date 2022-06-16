/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = [], odd = [], final = []
    nums.forEach(num => num % 2 === 0 ? even.push(num) : odd.push(num))
    for(let i = 0; i<odd.length; i++){
        final.push(even[i])
        final.push(odd[i])
    }
    
    return final
};