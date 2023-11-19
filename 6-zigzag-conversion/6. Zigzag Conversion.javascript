/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(zigzag, n) {

  if(n == 1) return zigzag

  let res = (new Array(n)).fill('')
  let n1 = 0

  let n2 = n-2

  if(n == 2){
    for(let ch of zigzag){
      res[n1]+=ch
      n1++
      if(n1 == n){
        n1 = 0
      }
    }
  }else{
    for(let ch of zigzag){

        //1. Assign chars to respective positions for the main numRows
        if(n1 < n){
          res[n1] += ch
          n1++
        }
        //2. Assign chars to the in-between positions 
        else if(n1 == n && n2 > 0 && n > 2){

          res[n2] += ch
          n2--

          //Handle the remaining 
          if(n2 == 0 && n1 == n){
            n2 = n-2
            n1 = 0
          }

        }

        //3. fill up the for the length of 2
        if(n == 2 && n1 == n){
          n1 == 0
        }
    }
  }

  console.log(res)

  return res.join('')

};