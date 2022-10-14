/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
    let firstInd = word.indexOf(ch)
    let sub = word.substring(0, firstInd+1)
    let remain = word.substring(firstInd+1)
   
    
    let left = 0, right = sub.length-1
    let sub_arr = sub.split('')
    while(left < right){
        let temp = sub_arr[right]
        sub_arr[right] = sub_arr[left]
        sub_arr[left] = temp
        left++
        right--
    }
    
    return sub_arr.join('')+remain
    
};