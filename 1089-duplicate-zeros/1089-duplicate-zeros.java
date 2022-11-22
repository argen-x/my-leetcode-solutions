class Solution {
    public void duplicateZeros(int[] arr) {
        ArrayList<Integer> res = new ArrayList<Integer>();
        for(int n: arr){
            if(n == 0){
                res.add(n);
                res.add(n);
            }else{
                res.add(n);
            }
        }
        
        for(int i = 0; i<arr.length; i++){
            arr[i] = res.get(i);
        }
    }
}