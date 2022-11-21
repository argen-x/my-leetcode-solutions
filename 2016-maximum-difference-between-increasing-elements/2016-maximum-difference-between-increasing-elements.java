class Solution {
    public int maximumDifference(int[] nums) {
        
        int left = 0, right = 1, maxDiff = -1;
        while(right < nums.length){
            if(nums[left] >= nums[right]){
                left = right;
                right++;
            }else{
                int tempDiff = nums[right] - nums[left];
                maxDiff = Math.max(maxDiff, tempDiff);
                right++;
            }
        }
        return maxDiff;
    }
}