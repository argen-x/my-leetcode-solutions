/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    
   let m = new Map()
   let keyPair  = new Map()
   words.forEach(word => {
     let arr = []
     for(let i = 0; i<word.length-1; i++){
       let diff = posInAbc(word.charAt(i+1)) - posInAbc(word.charAt(i))
       arr.push(diff)
     }
     let key = arr.join()
     m.set(key, m.get(key) == null ? 1 : m.get(key) + 1)
     keyPair.set(key, word)
   })

   console.log(m)

   for(let [key, value] of m){
     if(value == 1){
       return keyPair.get(key)
     }
   }

};

function posInAbc(myChar) {
  const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const position = letters.indexOf(myChar);
  return position;
}