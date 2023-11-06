class Solution {
    public int findChampion(int[][] grid) {
        
        int maxSum = 0;
        int ind = 0;
        for(int i = 0; i<grid.length; i++){

            int sum = 0;
            for(int j = 0; j<grid[i].length; j++){
                sum+=grid[i][j];
            }
            
            if(maxSum < sum){
                maxSum = sum;
                ind  = i;
            }

        }
        return ind;

    }

}