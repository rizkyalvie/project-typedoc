/**
 * A function to count and show discounted price
 * 
 * @param price Product price
 * @param qty Product quantity
 * @param discount Total Discount
 * 
 * @example
 * ```tsx
 * function calculateDiscount(price:number, qty:number, discount:number) {
  return (price * qty) * (discount / 100);
}
```
 * @returns Price after discount (Number)
 */
 export function calculateDiscount(price:number, qty:number, discount:number) {
  return (price * qty) * (discount / 100);
}

/**
 * A function to count and show taxed price
 * 
 * @param price Product price
 * @param qty Product quantity
 * @param taxPercentage Total tax
 * 
 * @example
 * ```tsx
 * function calculateTax(price: number, qty: number, taxPercentage: number) {
  return (price * qty) * (taxPercentage / 100);
}
```
 * @returns Price after tax (Number)
 */
export function calculateTax(price: number, qty: number, taxPercentage: number) {
  return (price * qty) * (taxPercentage / 100);
}

/**
 * Function to count price before tax and discount
 * 
 * @param price Product price
 * @param qty Product quantity
 * 
 * @example
 * ```tsx
 * function countPrice(price: number, qty: number) {
  return price * qty
}
```
 * @returns 
 */
export function countPrice(price: number, qty: number) {
  return price * qty
}

/**
 * Function to count Total Price
 * 
 * @param form Submitted form data:
 * 
 * @example
 * ```tsx
 * function countTotalPrice(form: {name: string, qty:number, price: number, discount:number, tax:number}) {

  let taxAmount = null;
  let priceAfterDiscount = null;
  let price = countPrice(form.price, form.qty)
  let totalPrice = null;

    if (form.discount > 0) { 
      priceAfterDiscount = price - calculateDiscount(form.price, form.qty, form.discount)
    }
    if (form.tax > 0) {
      if (priceAfterDiscount) {
        taxAmount = calculateTax(priceAfterDiscount, 1, form.tax)
        totalPrice = priceAfterDiscount + taxAmount
      } else {
        taxAmount = calculateTax(form.price, form.qty, form.tax)
        totalPrice = price + taxAmount
      }
    } else {
      if (priceAfterDiscount) {
        totalPrice = priceAfterDiscount
      } else {
      totalPrice = price
      }
    }
    return totalPrice
  }
  ```
 * 
 * @returns Total price after tax and discount (Number)
 */
export function countTotalPrice(form: {name: string, qty:number, price: number, discount:number, tax:number}) {

  let taxAmount = null;
  let priceAfterDiscount = null;
  let price = countPrice(form.price, form.qty)
  let totalPrice = null;

    if (form.discount > 0) { 
      priceAfterDiscount = price - calculateDiscount(form.price, form.qty, form.discount)
    }
    if (form.tax > 0) {
      if (priceAfterDiscount) {
        taxAmount = calculateTax(priceAfterDiscount, 1, form.tax)
        totalPrice = priceAfterDiscount + taxAmount
      } else {
        taxAmount = calculateTax(form.price, form.qty, form.tax)
        totalPrice = price + taxAmount
      }
    } else {
      if (priceAfterDiscount) {
        totalPrice = priceAfterDiscount
      } else {
      totalPrice = price
      }
    }
    return totalPrice
  }

  //Installation: npm i -g typedoc/npm i typedoc --save-dev
  //TypeDoc command: npx typedoc --out docs