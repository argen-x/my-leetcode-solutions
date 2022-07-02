/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let group = new Map()
    
    for(let i = 0; i<strs.length; i++){
        let rev = strs[i].split('').sort().join('')
        if(group.has(rev)){
            let inn = group.get(rev)
            inn.push(strs[i])
            group.set(rev, inn)
        }else{
            let inn = []
            inn.push(strs[i])
            group.set(rev, inn)
        }
    }
    
    console.table(group)
    let out = []
    for(let [key, value] of group){
        out.push(value)
    }
    
    return out
};