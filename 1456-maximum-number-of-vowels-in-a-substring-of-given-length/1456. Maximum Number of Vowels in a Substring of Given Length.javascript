/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    
    /** Initialize Counter */
    let vowel_count = 0
    let arr = ['a', 'e', 'i', 'o', 'u']
    let arr_sub = []

    /** Sliding Window Starter */
    for(let i = 0; i<k; i++){
      let ch = s.charAt(i)
      arr_sub.push(ch)
      if(arr.includes(ch)) vowel_count++
    }

    /** Sliding Window Continue */
    let max_count = vowel_count
    for(let i = k; i<s.length; i++){
      let shifted = arr_sub.shift()
      if(arr.includes(shifted)) vowel_count--
      let cur = s.charAt(i)
      if(arr.includes(cur)) vowel_count++
      arr_sub.push(cur)
      max_count = Math.max(max_count, vowel_count)
    }

    max_count = Math.max(max_count, vowel_count)


    return max_count


};