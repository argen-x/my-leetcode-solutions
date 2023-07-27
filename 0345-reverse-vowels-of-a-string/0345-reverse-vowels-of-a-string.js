
var reverseVowels = function(s) {

    let left = 0, right = s.length-1
    let s_arr = s.split('')
    while(left < right){
        let cLeft = s[left], cRight = s[right]
        if(isVowel(cLeft) && isVowel(cRight)){
            s_arr[left] = cRight
            s_arr[right] = cLeft
            left++
            right--
        }else{
            if(!isVowel(cLeft)) left++
            if(!isVowel(cRight)) right--
        }
    }

    return s_arr.join('')

};

function isVowel(l){

    l = l.toLowerCase()
    if(l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u'  ) return true
    return false
    
}