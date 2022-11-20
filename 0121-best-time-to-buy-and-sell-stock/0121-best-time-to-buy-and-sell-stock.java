/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(prices.length == 1) return 0
    
    let left = 0, right = 1
    let profitMax = 0
    
    while(right < prices.length){
        
        if(prices[left] >= prices[right]){
            
            left = right
            right++
            
        }else{
            
            let tempProfit = prices[right] - prices[left]
            profitMax = Math.max(profitMax, tempProfit)
            right++
            
        }
    }
    
    return profitMax
    
};