/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    
    let numStartFiller = a, numEndFiller = b
    let charStart = 'a', charEnd = 'b'
    
    if(a>b){
        numStartFiller = a
        numEndFiller = b
        charStart = 'a'
        charEnd = 'b'
    }else{
        numStartFiller = b
        numEndFiller = a
        charStart = 'b'
        charEnd = 'a' 
    }
    
    let count_iteration = Math.floor(numStartFiller/2)
    let remainder = numStartFiller % 2
    
    let subs = []
    
    for(let i = 0; i<count_iteration; i++){
        subs.push(charStart+charStart)
    }
    if(remainder){
        subs.push(charStart)
    }
    
    let len = subs.length
    let ind = 0
    while(numEndFiller>0){
        subs[ind] = subs[ind] + charEnd
        ind = (ind+1) % len
        numEndFiller--
    }
      
    
    return subs.join('')
    
    
};