/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    

    let m = new Map()
    list1.forEach((item, ind1) => {
        m.set(item, ind1)
    })

    let mn = null
    let m1 = new Map()
    list2.forEach((item, ind2) => {
        if(m.has(item)){
            let ind1 = m.get(item)
            let cur = ind1+ind2
            let arr = []
            if(m1.has(cur)) arr = m1.get(cur)
            arr.push(item)
            m1.set(cur, arr)
            mn = mn == null? cur : Math.min(cur, mn)
        }
    })

    return m1.get(mn)

};