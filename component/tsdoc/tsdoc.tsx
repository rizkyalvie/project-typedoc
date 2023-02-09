import { useState } from 'react';
import styles from '@/styles/Home.module.css'
import { calculateDiscount, calculateTax, countTotalPrice, countPrice } from '../../typedoc/main'

export default function TsDoc() {


  let [form, setForm] = useState({
    name: '',
    qty: 0,
    price: 0,
    discount: 0,
    tax: 0
  });

  let { name, qty, price, discount, tax } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  let totalDiscount = calculateDiscount(price, qty, discount);
  let priceAfterDiscount = countPrice(price, qty) - calculateDiscount(price, qty, discount);
  let totalTax = calculateTax(priceAfterDiscount, 1, tax);

  return (
    <>
      <div className={styles.tsdocContainer}>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <p>Product name</p>
            <input name='name' type="text" value={name} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <p>Quantity</p>
            <input name='qty' type="number" value={qty} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <p>Price</p>
            <input name='price' type="number" value={price} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <p>Discount</p>
            <input name='discount' type="number" value={discount} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <p>Tax</p>
            <input name='tax' type="number" value={tax} onChange={handleChange} />
          </div>
        </div>
        <div className={styles.resultContainer}>
          <p>Product name: {name}</p>
          <p>Quantity: {qty}</p>
          <p>Price: Rp{countPrice(price, qty)}</p>
          <hr />
          <p>Discount: Rp{totalDiscount} ({discount}%)</p>
          <p>Tax: Rp{totalTax} ({tax}%)</p>
          <p>Subtotal: Rp{priceAfterDiscount + totalTax}</p>
          <hr />
          <p style={{ marginTop: '-1px' }}>Total Price: Rp{countTotalPrice(form)}</p>
          <a href="https://typedoc.vercel.app" target="_blank"><button className={styles.showTypeScript}>Show Documentation</button></a>
        </div>
      </div>
    </>
  )
}