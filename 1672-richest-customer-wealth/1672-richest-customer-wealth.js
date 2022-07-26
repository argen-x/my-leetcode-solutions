/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
        let maxSum = 0
        
        for(let i = 0; i<accounts.length; i++){
                let sum1 = getSum(accounts[i])
                console.log(sum1)
                if(maxSum<sum1) maxSum = sum1
        }
        
        return maxSum
        
        
        function getSum(arr){
               const sum = arr.reduce((partialSum, a) => partialSum + a, 0); 
                return sum
        }
        
};