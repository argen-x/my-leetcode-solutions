class Solution {
    public int maxArea(int[] height) {
        
        int left = 0, right = height.length-1;
        int maxArea = 0;

        while(left < right){


            int curLeft = height[left], curRight = height[right];
            int curMin = Math.min(curLeft, curRight);

            maxArea = Math.max(maxArea, curMin * (right - left));

            if(curLeft >= curRight){
                right--;
            }else{
                left++;
            }

        }

        return maxArea;

    }
}