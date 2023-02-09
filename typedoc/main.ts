/**
 * Function untuk menghitung potongan harga
 * 
 * @param price Harga asli barang
 * @param qty Jumlah barang yang dibeli
 * @param discount Potongan harga barang yang dibeli
 * @returns Nominal potongan harga
 */
 export function calculateDiscountTS(price:number, qty:number, discount:number) {
  return (price * qty) * (discount / 100);
}

/**
 * 
 * @param price Harga asli barang
 * @param qty Jumlah barang yang dibeli
 * @param taxPercentage Pajak harga barang yang dibeli
 * @returns Nominal pajak barang
 */
export function calculateTaxTS(price: number, qty: number, taxPercentage: number) {
  return (price * qty) * (taxPercentage / 100);
}

/**
 * Function untuk mengalikan harga barang dengan jumlah yang dibeli
 * 
 * @param price Harga asli barang
 * @param qty Jumlah barang
 * @returns 
 */
export function sumPriceTS(price: number, qty: number) {
  return price * qty
}

/**
 * Function untuk menghitung total harga
 * 
 * @param form Object data dari form
 * @returns Total harga setelah potongan harga dan pajak
 */
export function countTotalPriceTS(form: {name: string, qty:number, price: number, discount:number, tax:number}) {

  console.log("form", form)

  let taxAmount = null;
  let priceAfterDiscount = null;
  let price = sumPriceTS(form.price, form.qty)
  let totalPrice = null;

    /**
     * Kalau ada diskon makan kondisi ini akan berjalan
     */
    if (form.discount > 0) { 
      priceAfterDiscount = price - calculateDiscountTS(form.price, form.qty, form.discount)
    }
    console.log("CL DC", calculateDiscountTS(form.price, form.qty, form.discount))
    console.log("priceAfterDiscount", priceAfterDiscount)
    /**
     * Kalau ada tax maka kondisi ini akan berjalan
     */
    if (form.tax > 0) {
      if (priceAfterDiscount) {
        console.log("MASUK PAD")
        taxAmount = calculateTaxTS(priceAfterDiscount, 1, form.tax)
        totalPrice = priceAfterDiscount + taxAmount
      } else {
        taxAmount = calculateTaxTS(form.price, form.qty, form.tax)
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