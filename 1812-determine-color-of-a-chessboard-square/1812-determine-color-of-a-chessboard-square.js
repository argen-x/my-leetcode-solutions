/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let white = ['b', 'd', 'f', 'h']
    
    if(white.includes(coordinates[0])){
       return coordinates[1] % 2 != 0  
    }else{
       return  coordinates[1] % 2 == 0
    }
};