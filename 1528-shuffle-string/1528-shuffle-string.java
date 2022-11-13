class Solution {
    public String restoreString(String s, int[] indices) {
        
        String[] res = new String[indices.length];
        
        for(int i = 0; i<indices.length; i++){
            res[indices[i]] = String.valueOf(s.charAt(i));
        }
        
        String res_str = String.join("", res);
        
        return res_str;
        
    }
}