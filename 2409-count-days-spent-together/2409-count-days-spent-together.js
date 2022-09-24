/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    //convert string dates to Number, substring(startInd, endIndex) *endIndex+1
    let arr_mA = Number(arriveAlice.substring(0, 2)),
        arr_dA = Number(arriveAlice.substring(3, 5)),
        leave_mA = Number(leaveAlice.substring(0, 2)),
        leav_dA = Number(leaveAlice.substring(3, 5))
    
    let arr_mB = Number(arriveBob.substring(0, 2)),
        arr_dB = Number(arriveBob.substring(3, 5)),
        leave_mB = Number(leaveBob.substring(0, 2)),
        leav_dB = Number(leaveBob.substring(3, 5))
    
    let set_A = []
    for(let i = arr_mA; i<= leave_mA; i++){        
        let start = i == arr_mA ? arr_dA : 1,
            end = i == leave_mA ? leav_dA : days[i-1]
        let month = i<10 ? `0${i}` : `${i}`
        for(let j = start; j<=end; j++){
            let day = j<10 ? `0${j}` : `${j}`
            let cur_day = `${month}${day}`
            set_A.push(cur_day)
        }
    }
    
    let count = 0
    for(let i = arr_mB; i<= leave_mB; i++){        
        let start = i == arr_mB ? arr_dB : 1,
            end = i == leave_mB ? leav_dB : days[i-1]
        let month = i<10 ? `0${i}` : `${i}`
        for(let j = start; j<=end; j++){
            let day = j<10 ? `0${j}` : `${j}`
            let cur_day = `${month}${day}`
            if(set_A.includes(cur_day)) count++
        }
    }
    
    return count
    
    
    
    
};