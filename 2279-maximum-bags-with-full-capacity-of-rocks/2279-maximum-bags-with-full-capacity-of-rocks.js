/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {

    
    const map1Needed = new Map();
    for(let i = 0; i<capacity.length; i++){
        map1Needed.set(i, capacity[i] - rocks[i]);
    }   

    const sortNumAsc = new Map([...map1Needed].sort((a, b) => a[1] - b[1]));
    let count = additionalRocks;
    const newFinMap2 = new Map();
    let sizeOfFull = 0;
    for(let [key, value] of sortNumAsc){    
        let value2 = value;
        if(value > 0 && count > 0){
           if(count >= value){
               value2 = value2-value;
               count = count - value;
           }else {
               values2 = value2 - count;
               count = count - count;
           }
        }
        
        if(value2 == 0){
            sizeOfFull++;
        }
        
        newFinMap2.set(key, value2);
    }
  
    return sizeOfFull;
    
    
    
};