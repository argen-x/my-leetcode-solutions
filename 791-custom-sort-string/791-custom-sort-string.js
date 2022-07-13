/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    
    let orderMap = new Map();
    for(let i = 0; i<order.length; i++){
        orderMap.set(order[i], i)
    }
    
    let str = new Map()
    let strFreq = new Map()
    let fin = ''
    for(let i = 0; i<s.length; i++){
        if(!orderMap.has(s[i])){
            fin+=s[i]
        }else{
            str.set(s[i], orderMap.get(s[i]))
            if(strFreq.has(s[i])){
                let inc = strFreq.get(s[i])
                strFreq.set(s[i], inc+1)
            }else{
                strFreq.set(s[i], 1)
            }
        }
    }
    
    let sorted = new Map([...str].sort((a, b) => a[1] - b[1]))
    let finX = ''
    for(let [key, value] of sorted){
        finX+=key.repeat(strFreq.get(key))
    }
    
    return finX+fin
    
};