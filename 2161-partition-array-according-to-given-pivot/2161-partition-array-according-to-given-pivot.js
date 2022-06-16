/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let smaller = [], middle = [],  bigger = [] 
    nums.forEach((a) => { pivot > a ? smaller.push(a) : pivot == a ? middle.push(a) : bigger.push(a)})
    return smaller.concat(middle.concat(bigger))
};