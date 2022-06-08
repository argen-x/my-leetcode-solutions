/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let arr = s.split(' ').filter(el => el != '')
    
    return arr.length
};