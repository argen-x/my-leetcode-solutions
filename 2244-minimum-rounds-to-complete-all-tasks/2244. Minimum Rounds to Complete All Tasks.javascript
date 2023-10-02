/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    
    let m = new Map()
    let res = 0
    tasks.forEach(task => m.set(task, m.get(task) == null ? 1 : m.get(task)+1))
    for(let [key, value] of m){
      if(value == 1){
        return -1
      }else{
        res+=(Math.floor(value/3) + (value % 3 != 0 ? 1 : 0))
      }
    }

    return res


};