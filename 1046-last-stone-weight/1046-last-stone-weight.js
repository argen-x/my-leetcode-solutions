/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    let endProcess = false
    let stones2 = stones
    while(!endProcess){
        let arr = stones2.sort((a, b) => b - a)
        if(arr.length > 1){
            let mx_1 = arr[0], mx_2 = arr[1]
            if(mx_1 == mx_2){
                arr.splice(0, 2)
            }else{
                let newWeight = mx_1 - mx_2
                arr.splice(0, 2)
                arr.unshift(newWeight)
            }
            stones2 = arr            
        }else{
            endProcess = true
            break
        }
        
        
    }
    console.log(stones2)
    return stones2.length == 0 ? 0 : stones2[0]
    
};