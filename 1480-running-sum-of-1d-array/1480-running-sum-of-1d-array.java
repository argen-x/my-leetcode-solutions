class Solution {
    public int[] runningSum(int[] nums) {
        
        int prefSum = nums[0];
        int[] res = new int[nums.length];
        res[0] = prefSum;
        
        for(int i = 1; i<nums.length; i++){
            prefSum+=nums[i];
            res[i] = prefSum;
        }
        
        return res;
        
    }
}