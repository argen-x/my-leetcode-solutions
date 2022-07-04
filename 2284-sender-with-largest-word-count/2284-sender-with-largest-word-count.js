/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    
    let m = new Map()
    for(let i = 0; i<senders.length; i++){
        if(m.has(senders[i])){
            let mesLen = m.get(senders[i])
            mesLen+= (messages[i].split(' ')).length
            m.set(senders[i], mesLen)
        }else{
            m.set(senders[i], (messages[i].split(' ')).length)
        }
    }
    
    let sortedMap = new Map([...m].sort((a, b) =>  b[1] - a[1] ))
    
    let out = []
    let prevValue = 0
    for(let [key, value] of sortedMap){
        if(value>=prevValue){
            prevValue = value
            out.push(key)
        }else{
            break;
        }
    }
    
    out.sort().reverse()

    return out[0]
    
};