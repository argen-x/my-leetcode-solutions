/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = new Array(n+1).fill(0)
    for(let i = 0; i<n+1; i++){
        res[i] = binaryRepLen(i)
    }
    return res
};

const binaryRepLen = function(num){
    let count = 0
    let res = (num >>> 0).toString(2);
    console.log(res)
    for(let i = 0; i<res.length; i++){
        if(res.charAt(i) == '1'){
            count++
        }
    }
    return count
}