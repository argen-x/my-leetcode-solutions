/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    
    let arr1 = s1.split(' ')
    let arr2 = s2.split(' ')
    let occur = new Map()
    for(let i = 0; i<arr1.length; i++){
        if(occur.has(arr1[i])){
            let x = occur.get(arr1[i])
            x.push(arr1[i])
            occur.set(arr1[i], x)
        }else{
            let x = []
            x.push(arr1[i])
            occur.set(arr1[i], x)
        }
    }
    
    for(let i = 0; i<arr2.length; i++){
        if(occur.has(arr2[i])){
            let x = occur.get(arr2[i])
            x.push(arr2[i])
            occur.set(arr2[i], x)
        }else{
            let x = []
            x.push(arr2[i])
            occur.set(arr2[i], x)
        }
    }
    
    let out = []
    for(let [key, value] of occur){
        count = 0
        if(value.length == 1){
            if(arr1.includes(key)) count++
            if(arr2.includes(key)) count++
        }
        
        if(count == 1) out.push(key)
        
    }
    
    return out
    
};