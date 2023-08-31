/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    
    let m = new Map()
    m.set('L', 0)
    m.set('R', 0)
    m.set('_', 0)
    for(let i = 0; i<moves.length; i++){
        m.set(moves.charAt(i), m.get(moves.charAt(i))+1)
    }

    let countL = m.get('L'), countR = m.get('R'), count_ = m.get('_')
    return Math.max(countL, countR) - Math.min(countL, countR) + count_



};