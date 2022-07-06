/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    
        let m = new Map()
        for(let log of cpdomains){
                let endCountInd = log.indexOf(' ')
                let count = log.substring(0, endCountInd)
                let domains = log.substring(endCountInd+1)
                if(domains.indexOf('.') != -1){
                      let arr = domains.split('.')
                      let portionDomain = []
                      let prev = ''
                      let ind = 0                      
                      for(let i = arr.length-1; i>=0; i--) {
                          let w = arr[i]
                          if(ind == 0){
                                prev+=w;  
                          } else{
                                prev=w+'.'+prev
                          }   
                          portionDomain.push(prev)
                          ind++
                      }
                        
                     for(let x of portionDomain){
                             if(m.has(x)){
                                     let increment = m.get(x)
                                     m.set(x, increment+Number(count))
                             }else{
                                     m.set(x, Number(count))
                             }
                     }
                        
                }else{
                        if(m.has(domains)){
                                let inc = m.get(domains)
                                m.set(domains, inc+Number(count))
                        }else{
                                m.set(domains, Number(count))
                        }
                        
                }
        }
        
        console.table(m)
        let arrx = []
        for(let [key, value] of m){
                let strx = value+' '+key
                arrx.push(strx)
        }
        
        return arrx
        
};