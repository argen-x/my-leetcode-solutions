/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    
      const abc = [...('abcdefghijklmnopqrstuvwxyz')] 
      let sumArr = []
      let sumIn = 0
      let count =  0
      let n = s.length;
      
      for(let i = 0; i<n; i++){
              
              let ind = abc.indexOf(s[i])
              sumIn = sumIn + widths[ind]
              let ind_1 = abc.indexOf(s[i+1])
              console.log(sumIn)
              if(n-1 === i){
                   sumArr.push(sumIn);
                   count++;
                  
              }else{
                   if(sumIn + widths[ind_1]  > 100){
                           sumArr.push(sumIn)
                           sumIn = 0
                           count++
                   }   
              }
      }
        
      return [count, sumArr[sumArr.length-1]]  
};