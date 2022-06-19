/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let white = [...('bdfh')]

    return white.includes(coordinates[0]) ? coordinates[1] % 2 != 0 : coordinates[1] % 2 == 0
};