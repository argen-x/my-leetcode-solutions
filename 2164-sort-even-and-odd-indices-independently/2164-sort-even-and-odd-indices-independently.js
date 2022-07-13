/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    
    let odd = [], even = []
    for(let i = 0; i<nums.length; i++){
        if(i%2==0){
            even.push(nums[i])
        }else{
            odd.push(nums[i])
        }
    }
    
    odd.sort((a, b) => b-a)
    even.sort((a, b) => a-b)
    
    let fin = []
    let indEven = 0, indOdd = 0
    for(let i = 0; i<nums.length; i+=2){
        fin[i] = even[indEven]
        indEven++
    }

    for(let i = 1; i<nums.length; i+=2){
        fin[i] = odd[indOdd]
        indOdd++
    }
    
    return fin
};