/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
    let m = new Map()
    edges.forEach((item, index) => {
        if(m.has(item)){
            let score = m.get(item)
            m.set(item, score+index)
        }else{
            m.set(item, index)
        }
    })
    
    let m_sorted = new Map([...m].sort((a, b) => a[1] == b[1] ? a[0] - b[ 0] : b[1] - a[1]))
    
    return [...m_sorted.keys()][0]
};