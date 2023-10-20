/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    if (chars.length == 1) return 1

    let res = chars[0]
    let len = res.length
    let count = 0
    let arr = []

    for (let i = 1; i < chars.length; i++) {
        console.log(res, i)
        if (res.charAt(0) == chars[i]) {
            res += chars[i]
        } else {
            count++
            len = res.length
            arr.push(res.charAt(0))
            res = chars[i]
            if (len > 1) {
                if (len < 10) {
                    arr.push(len.toString())
                    count++
                } else {
                    let strArr = len.toString().split('')
                    arr.push(...strArr)
                    count += strArr.length
                }
            }
        }
    }

    len = res.length
    count++
    arr.push(res.charAt(0))
    if (len > 1) {
        if (len < 10) {
            arr.push(len.toString())
            count++
        } else {
            let strArr = len.toString().split('')
            arr.push(...strArr)
            count += strArr.length
        }
    }


    console.log(count)
    console.log(arr.length, chars.length)

    for (let i = 0; i < arr.length; i++) {
        chars[i] = arr[i]
    }

    return count

};