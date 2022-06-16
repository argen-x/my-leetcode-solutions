/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let odd = [], even = [], final = []
    nums.forEach(num => num%2 === 0 ? even.push(num) : odd.push(num))
    return even.concat(odd)
};