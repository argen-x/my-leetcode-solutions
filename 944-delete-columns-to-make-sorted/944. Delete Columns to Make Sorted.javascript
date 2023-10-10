/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    
    let arr = strs[0].split('')
    for(let i = 1; i<strs.length; i++){
        for(let j = 0; j<strs[i].length; j++){
            if(arr[j] != null){
                let prev = arr[j], cur = strs[i][j]
                if(prev.localeCompare(cur) > 0){
                    arr[j] = null
                }else{
                    arr[j] = cur
                }
            }
          
        }
    }
    let count = 0

    for(let ch of arr){
        if(ch == null){
            count++
        }
    }

    return count


};