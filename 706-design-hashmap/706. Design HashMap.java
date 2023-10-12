class MyHashMap {

    public HashMap<Integer, Integer> hash;

    public MyHashMap() {
        this.hash = new HashMap<Integer, Integer>();
    }
    
    public void put(int key, int value) {
        this.hash.put(key, value);
    }
    
    public int get(int key) {
        return hash.get(key) == null ? -1 : hash.get(key);
    }
    
    public void remove(int key) {
        hash.remove(key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */