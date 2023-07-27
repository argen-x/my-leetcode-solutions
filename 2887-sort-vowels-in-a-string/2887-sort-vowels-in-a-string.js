
var sortVowels = function(s) {

    let m = new Map()
    let arr = []
    let s_arr = s.split('')

    // 1. ASCII Code Mapping & Array Initializing.
    for(let i = 0; i<s_arr.length; i++){
        if(isVowel(s_arr[i])){
            let code = getCodeASCII(s[i])
            m.set(code, s[i]) 
            arr.push(code)
        }
    }

    // 2. Sort the arr
    arr.sort((a, b) => a - b)
    console.log(arr)

    // 3. Replace and Swap
    let idx = 0
    for(let i = 0; i<s_arr.length; i++){
        if(isVowel(s_arr[i])){
          s_arr[i] = m.get(arr[idx])
          idx++
        } 
    }
    return s_arr.join('')
};


function isVowel(l){

    l = l.toLowerCase()
    if(l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u'  ) return true
    return false
    
}

function getCodeASCII(char){
    return char.charCodeAt(0)
}



