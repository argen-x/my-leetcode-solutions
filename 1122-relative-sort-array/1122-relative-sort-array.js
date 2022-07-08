/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
    let m2 = new Map()
    for(let i = 0; i<arr2.length; i++){
        m2.set(arr2[i], i)
    }
    
    let m2_sorted = new Map([...m2].sort((a, b) => a[1] - b[1]))
    
    //arr.splice(index, 0, item);
    let arr1_freq = new Map()
    let arr2_excess = []
    arr1.forEach(num => {
        if(m2.has(num)){
            if(arr1_freq.has(num)){
                let inc = arr1_freq.get(num)
                arr1_freq.set(num, inc+1)
            }else{
                arr1_freq.set(num, 1)
            }
        }else{
            arr2_excess.push(num)
        }
    })
    
    arr2_excess.sort((a, b) =>  a - b)
    let final = []
    for(let [key, value] of m2_sorted){
        let count = arr1_freq.get(key)
        for(let i = 0; i<count; i++){
            final.push(key)
        }
    }
    
    return final.concat(arr2_excess)
    

};