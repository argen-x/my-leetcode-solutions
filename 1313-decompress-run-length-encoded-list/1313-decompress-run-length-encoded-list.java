class Solution {
    public int[] decompressRLElist(int[] nums) {
        
        
         List<Integer> list = new ArrayList<>();
         for(int i = 0; i<nums.length; i+=2){
             int freq = nums[i], 
                 val = nums[i+1];
             for(int j = 0; j<freq; j++){
                 list.add(val);
             }
         }
         
         int[] res = new int[list.size()];
         for(int i = 0; i< list.size(); i++){
             res[i] = list.get(i);
         }
        
        
        return res;
        
    }
}