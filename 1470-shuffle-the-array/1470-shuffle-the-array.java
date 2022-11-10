class Solution {
    public int[] shuffle(int[] nums, int n) {
        
        int[] res = new int[n*2];
        for(int i = 0, j = n, idx=0; i<n && idx < 2*n && j<2*n; i++, j++){
            res[idx++] = nums[i];
            res[idx++] = nums[j];
        }
        return res;
    }
}