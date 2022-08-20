/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let m = new Map()
    let s = new Set()
    nums.forEach((item, index) => {
        s.add(item)
        if(m.has(item)){
            let arr = m.get(item)
            arr.push(index)
            m.set(item, arr)
        }else{
            let arr = []
            arr.push(index)
            m.set(item, arr)
        }
    })
    
    let arr = Array.from(s)
    let low = 0, high = arr.length-1
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        let guess = arr[mid]
        console.log(guess)
        if(guess == target){
            let res = m.get(guess)
            return [res[0], res[res.length-1]]
        }
        if(guess<target){
             low = mid+1
        }else{
             high = mid-1
        }
    }
    
    return [-1, -1]
};