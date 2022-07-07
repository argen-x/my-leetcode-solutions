/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let arr = Array.from(new Set(nums1.concat(nums2)))
    
    let map1 = new Map()
    for(let x of nums1){
        map1.set(x, 1)
    }
    
    let map2 = new Map()
    for(let x of nums2){
        map2.set(x, 1)
    }
    
    let out = []
    for(let num of arr){
        let count = 0
        if(map1.has(num)) count++
        if(map2.has(num)) count++
        if(count == 2) out.push(num)
    }
    
    return out
    
};