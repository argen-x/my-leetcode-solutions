/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1 = new Map()
    nums1.forEach(num => {
        if(map1.has(num)){
            let inc = map1.get(num)
            map1.set(num, inc+1)
        }else{
            map1.set(num, 1)
        }
    })
    console.table(map1)
    
    let map2 = new Map()
    nums2.forEach(num => {
        if(map2.has(num)){
            let inc = map2.get(num)
            map2.set(num, inc+1)
        }else{
            map2.set(num, 1)
        }
    })
    console.table(map2)
    
    let arr = Array.from(new Set(nums1.concat(nums2)))
    let out = []
    arr.forEach(num => {
        if(map1.has(num) && map2.has(num)){
            let ocurrence = Math.min(map1.get(num), map2.get(num))
            for(let i = 0; i<ocurrence; i++){
                out.push(num)
            }
        }
    })
    
    return out
};