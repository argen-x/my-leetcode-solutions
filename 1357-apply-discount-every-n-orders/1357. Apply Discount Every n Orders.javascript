/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    this.n = n
    this.client_number = 0
    this.discount = discount
    this.product_price_map = new Map()
    products.forEach((product, index) => {
      this.product_price_map.set(product, prices[index])
    })
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    this.client_number++
    let bill = 0
    product.forEach((p, index) => {
      let price = this.product_price_map.get(p)
      let am = amount[index]
      bill+=(price*am)
    })
    if(this.n === this.client_number && this.discount > 0) {
      bill = bill*((100-this.discount)/100)
      this.client_number = 0
    }
    return bill
};

/** 
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */