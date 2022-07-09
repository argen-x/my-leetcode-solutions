/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let mLosers = new Map()
    let allGamers = new Set()
    matches.forEach(match => {
        allGamers.add(match[0])
        let loser = match[1]
        allGamers.add(loser)
        if(mLosers.has(loser)){
            let inc = mLosers.get(loser)
            mLosers.set(loser, inc+1)
        }else{
            mLosers.set(loser, 1)             
         }
    })

    let oneLost = []
    for(let [key, value] of mLosers){
        if(value == 1){
            oneLost.push(key)
        }
        if(allGamers.has(key)){
            allGamers.delete(key)
        }
    }
    
    return [[...allGamers].sort((a, b) => a-b), oneLost.sort((a,b) => a - b)]
    
};