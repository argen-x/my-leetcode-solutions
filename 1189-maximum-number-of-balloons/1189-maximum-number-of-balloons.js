/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let b = new Map()
    let bln = 'balloon'
    for(let i = 0; i<bln.length; i++){
        b = addItem(b, bln[i])
    }
    
    let t = new Map()
    for(let i = 0; i<text.length; i++){
        t = addItem(t, text[i])
    }
    
    let out = []
    let prevMin = Infinity
    for(let [key, value] of t){
        if(b.has(key)){
            let df = (Math.floor(value/b.get(key)))
            if(df<prevMin) prevMin = df
            b.delete(key)
        }
    }
   
   if(b.size === 0){
       return prevMin
   }else{
       return 0
   }
        
        
        
    function addItem(m, el){
        if(m.has(el)){
            let inc = m.get(el)
            m.set(el, inc+1)
        }else{
            m.set(el, 1)
        }
        return m
    }    
};