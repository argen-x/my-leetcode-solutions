/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    
    let m = new Map()
    for(let i = 0; i<groupSizes.length; i++){
        if(m.has(groupSizes[i])){
            m.get(groupSizes[i]).push(i)
        }else{
            let inn = []
            inn.push(i)
            m.set(groupSizes[i], inn)
        }
    }
    
    let output = []
    for(let [key, value] of m){
        if(key == value.length) output.push(value)
        if(key < value.length){
            const chunkSize = key;
            for (let i = 0; i < value.length; i += chunkSize) {
                const chunk = value.slice(i, i + chunkSize);
                output.push(chunk)
            }
        }
        
    }
    return output
};