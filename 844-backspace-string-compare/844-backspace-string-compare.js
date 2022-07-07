/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    
    while(s.includes('#')){
        let ind = s.indexOf('#')
        s = setCharAt(s, ind ,'');
        s = setCharAt(s, ind-1, '')
    }
    
    while(t.includes('#')){
        let ind = t.indexOf('#')
        t = setCharAt(t, ind ,'');
        t = setCharAt(t, ind-1, '')
    }

    return s==t

    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }
    
    
};