/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    
    if(obj != null){

        if(obj.length != null && obj.length > 0){
            return false
        }

        for(let key in obj){
            return false
        }

    }

    return true
};