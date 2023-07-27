/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    let s_arr = s.split('')
    let arr = []
    // 1.  Array Initializing.
    for(let i = 0; i<s_arr.length; i++){
        if(isVowel(s_arr[i])) arr.push(s_arr[i])
    }

    // 3. Replace and Swap
    let idx_end = arr.length-1
    for(let i = 0; i<s_arr.length; i++){
        if(isVowel(s_arr[i])){
          s_arr[i] = arr[idx_end]
          idx_end--
        } 
    }
    return s_arr.join('')

};

function isVowel(l){

    l = l.toLowerCase()
    if(l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u'  ) return true
    return false
    
}