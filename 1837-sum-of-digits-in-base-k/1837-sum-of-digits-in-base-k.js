/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let out = 0;
    while (n) {
        out += Math.trunc(n % k);
        n /= k;
    }
    return out;
};