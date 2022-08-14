/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    arr.sort((a, b) => a - b)
    let n = arr.length
    
    let m = new Map()
    let minAbs = Math.abs(arr[1] - arr[0])
    for(let i = 0; i<n-1; i++){
        let abs = Math.abs(arr[i+1] - arr[i])
        if(m.has(abs)){
            let arr_x = m.get(abs)
            arr_x.push([arr[i], arr[i+1]])
            m.set(abs, arr_x)
        }else{
            let arr_x = []
            arr_x.push([arr[i], arr[i+1]])
            m.set(abs, arr_x)
        }
        if(abs<minAbs){
            minAbs = abs
        }
    }
    
    let res = [...m.get(minAbs)]
    
    return res
    
};