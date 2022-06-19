/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {

    return [...('bdfh')].includes(coordinates[0]) ? coordinates[1] % 2 != 0 : coordinates[1] % 2 == 0
};