class Solution {
    public int maxDistance(int[] colors) {
        int maxDiff = 0;
        for(int i = 0; i<colors.length; i++){
            for(int j = 0; j<colors.length; j++){
                if(i != j && colors[i] != colors[j]){
                    int tempDiff = Math.abs(i - j);
                    maxDiff = Math.max(tempDiff, maxDiff);
                }
            }
        }
        return maxDiff;
    }
}