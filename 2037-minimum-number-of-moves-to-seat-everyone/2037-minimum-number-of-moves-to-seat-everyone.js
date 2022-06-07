/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    
    let seatSort = seats.sort((a, b) => a-b), stuSort = students.sort((a, b) => a-b)

    let total = 0
    for(let i = 0; i<seats.length; i++){
        total+=Math.abs(seatSort[i] - stuSort[i])
    }
    
    return total
    
};