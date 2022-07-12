/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        
        //After learning two pointers, decided to revisit and redo
        
        let str = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
        let low = 0, high = str.length-1
        while(high > low){
                if(str[low] != str[high]) return false
                low++
                high--
        }
        
        return true
    
};