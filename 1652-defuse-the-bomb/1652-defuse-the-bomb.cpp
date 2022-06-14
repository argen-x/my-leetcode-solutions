class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        int n = code.size();
        vector <int> ans(n, 0);
        for(int i = 0; i < n; i++) {
            int s = 0;
            for(int j = k; j != 0; j = j < 0 ? j + 1 : j - 1) {
                s += code[(i + j + n) % n];
            }
            ans[i] = s;
        }
        
        return ans;
    }
};