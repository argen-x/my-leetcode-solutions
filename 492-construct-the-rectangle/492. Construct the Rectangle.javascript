/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    
    let mn = Number.MAX_SAFE_INTEGER
    let res = []
    for(let w = 1; w<=area; w++){
        if(area % w == 0){
            let l = area/w
            if(l>=w){
                let diff = Math.abs(l, w)
                if(diff <= mn){
                    mn = diff
                    res = [l, w]
                }
            }
        }
    }

    return res

};