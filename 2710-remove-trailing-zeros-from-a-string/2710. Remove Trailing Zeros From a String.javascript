/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {

    let lastIndex = null
    for(let i = num.length-1; i>=0; i--){
      if(num.charAt(i) != '0'){
        lastIndex = i
        break
      }
    }

    return num.substring(0, lastIndex+1)

};