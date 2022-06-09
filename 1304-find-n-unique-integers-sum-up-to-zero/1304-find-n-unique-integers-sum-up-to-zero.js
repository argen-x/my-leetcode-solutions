/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
        
        let nIter = n%2 == 0 ? n : n -1
        let even = n%2 == 0 ? true : false
        let out = []
        let start = 1
	for(let i = 0; i<nIter/2; i++) {
		
		out.push(-(start))
		out.push(start)
		start++;
        }

       if(even){
               return out
       }else if(n==1){
              return [0]
       }else{
              out.push(0)
               return out  
       }
};