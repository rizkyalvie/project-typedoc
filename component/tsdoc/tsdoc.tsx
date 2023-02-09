import { useState } from 'react';
import styles from '@/styles/Home.module.css'
import { calculateDiscountTS, calculateTaxTS, countTotalPriceTS, sumPriceTS } from '../../typedoc/main'

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

  let totalDiscount = calculateDiscountTS(price, qty, discount);
  let priceAfterDiscount = sumPriceTS(price, qty) - calculateDiscountTS(price, qty, discount);
  let totalTax = calculateTaxTS(priceAfterDiscount, 1, tax);

  return (
    <>
      <div className={styles.tsdocContainer}>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <p>Nama Barang</p>
            <input name='name' type="text" value={name} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <p>Jumlah</p>
            <input name='qty' type="number" value={qty} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <p>Harga</p>
            <input name='price' type="number" value={price} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <p>Diskon</p>
            <input name='discount' type="number" value={discount} onChange={handleChange} />
          </div>
          <div className={styles.inputContainer}>
            <p>Pajak</p>
            <input name='tax' type="number" value={tax} onChange={handleChange} />
          </div>
          <div className={styles.madeByTS}>Made by Kegabutan</div>
        </div>
        <div className={styles.resultContainer}>
          <p>Nama: {name}</p>
          <p>Jumlah: {qty}</p>
          <p>Harga: Rp{sumPriceTS(price, qty)}</p>
          <hr />
          <p>Diskon: Rp{totalDiscount} ({discount}%)</p>
          <p>Total Pajak: Rp{totalTax} ({tax}%)</p>
          <p>Subtotal: Rp{priceAfterDiscount + totalTax}</p>
          <hr />
          <p style={{ marginTop: '-1px' }}>Total Harga: Rp{countTotalPriceTS(form)}</p>
          <a href="https://typedoc.vercel.app" target="_blank"><button className={styles.showTypeScript}>Show TS Documentation</button></a>
        </div>
      </div>
    </>
  )
}