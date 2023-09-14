/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    

    let s = new Set()
    for(let num of nums){
        let a = num[0], b = num[1]
        for(let i = a; i<=b; i++){
            s.add(i)
        }
    }

    return s.size


    

};