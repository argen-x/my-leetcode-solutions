/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {

  let w_count = 0
  let arr = []
  for(let i = 0; i<k; i++){
    let cur = blocks.charAt(i)
    if(cur =='W') w_count++
    arr.push(cur)
  }

  let min_count = w_count
  for(let i = k; i<blocks.length; i++){
    let shifted = arr.shift()
    if(shifted == 'W') w_count--

    let cur = blocks.charAt(i)
    arr.push(cur)
    if(cur == 'W') w_count++

    min_count = Math.min(w_count, min_count)
  }

  return min_count

};