/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let arr = Array.from(new Set(nums1.concat(nums2)))
    let set1 = new Set(nums1), set2 = new Set(nums2)

    let out = []
    for(let num of arr){
        if(set1.has(num) && set2.has(num)) out.push(num) 
    }
    
    return out
    
};