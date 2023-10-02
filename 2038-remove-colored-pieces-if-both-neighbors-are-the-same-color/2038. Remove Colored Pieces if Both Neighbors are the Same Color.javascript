/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    
    let countA = 0, countB = 0
    for(let i = 1; i<colors.length-1; i++){
      if(colors.charAt(i) == colors.charAt(i-1) && 
         colors.charAt(i) == colors.charAt(i+1)){
           if(colors.charAt(i) == 'A'){
             countA++
           }else{
             countB++
           }
      }
    }

    return countA > countB

};