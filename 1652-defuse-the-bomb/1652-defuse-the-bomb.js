/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let out = []
    let n = code.length;
    for(let i = 0; i < n; i++){      
        let sum = 0;
        for(let j = k; j != 0; ){       
            sum += code[(i + j + n) % n];
            if(j < 0) j ++;
            else j--;
        }
        out.push(sum);
    }
    return out; 
};