/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
        if(nums2.length == 1) return -1
        
        let indices = new Map()
        nums2.forEach((item, index) => {
            indices.set(index, item)    
        })
        
        let nums1_indices = new Map()
        nums1.forEach(item => {
                let ind = nums2.indexOf(item)
                nums1_indices.set(item, ind)
        })
        
        let out = []
        for(let [key, value] of nums1_indices){
            let item = -1
            let starts = value;
            let ends = nums2.length
            
            while(starts<ends){
                
                starts++
                if(indices.has(starts)){
                    if(indices.get(starts) > key){
                        item = indices.get(starts)
                        break
                    }
                }
            }
            
            out.push(item)
        }
        
        
        return out
};