/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {

    let regExp = /[a-zA-Z]/g;
    let words = sentence.split(' ')
    for(let i = 0; i<words.length; i++){
      let w = words[i]
      if (
        w.length == 1 || 
        w.indexOf('$') == -1 || 
        w.indexOf('$') != w.lastIndexOf('$')|| 
        (w.charAt(0) != '$') ||
        regExp.test(w))
      {
        continue
      }else{
        let num = Number(w.substring(1, w.length))
        let discounted = num*(100-discount)/100
        let str =  `$${(discounted.toFixed(2)).toString()}`
        words[i] = str
      }
    }

    return words.join(' ')

};