class SeatManager {

    public SortedSet<Integer> empty;
    public SeatManager(int n) {
        this.empty = new TreeSet<Integer>(); 
        for(int i = 1; i<=n; i++){
            this.empty.add(i);
        }
    }
    
    public int reserve() {
        int toReserve = this.empty.first();
        this.empty.remove(toReserve);
        return toReserve;
    }
    
    public void unreserve(int seatNumber) {
        this.empty.add(seatNumber);
    }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * SeatManager obj = new SeatManager(n);
 * int param_1 = obj.reserve();
 * obj.unreserve(seatNumber);
 */