/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.freq1 = new Map()
    nums1.forEach(num => {
      this.freq1.set(num, this.freq1.get(num) == null ? 1 : this.freq1.get(num)+1)
    })
    this.nums2 = nums2
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    this.nums2[index] += val
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let cnt = 0
    for(let num of this.nums2){
      if(this.freq1.get(tot-num)){
        let freq = this.freq1.get(tot-num)
        cnt+=freq
      }
    }
    return cnt
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */