/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
        
    let low = 0, high = s.length-1
    while(high>low){
         if(s.charAt(low) != s.charAt(high)){
                 return (isPalindrome(s, low, high-1) || isPalindrome(s, low+1, high))
         }   
            
         high--
         low++
    }
        
    return true      
        
        
    function isPalindrome(str, low, high){
        
        while(high > low){
                if(str.charAt(low) != str.charAt(high)) return false
                low++
                high--
        }
        
        return true
    }
};