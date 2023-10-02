/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    
    let letterLogs = [],
        digitsLogs = []

    for(let log of logs){
      if(isNaN(Number(log.charAt(log.length-1)))){
        letterLogs.push(log)
      }else{
        digitsLogs.push(log)
      }
    }

    letterLogs.sort((a, b) => {      
      let arrA = a.split(' '), arrB = b.split(' ')
      let identifierA = arrA.shift(),
          identifierB = arrB.shift()
      let contentA = arrA.join(' '),
          contentB = arrB.join(' ')
      const contentComparison = contentA.localeCompare(contentB);
      if (contentComparison === 0) {
        return identifierA.localeCompare(identifierB);
      }
      return contentComparison;
    });
    
    
    return [...letterLogs, ...digitsLogs]


};

