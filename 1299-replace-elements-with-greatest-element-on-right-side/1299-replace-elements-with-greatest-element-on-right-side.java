class Solution {
    public int[] replaceElements(int[] arr) {
        
        int[] maxes = new int[arr.length];
        int tempGreatest = arr[arr.length-1];
        
        for(int i = arr.length-1; i>=0; i--){
            tempGreatest = Math.max(arr[i], tempGreatest);
            maxes[i] = tempGreatest;
        }
        
        int[] res = new int[arr.length];
        res[res.length-1] = -1;
        
        for(int i = 1; i<maxes.length; i++){
            res[i-1] = maxes[i];
        }
        
        return res;
    }
}