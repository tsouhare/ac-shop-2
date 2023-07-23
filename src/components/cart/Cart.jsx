import styles from './Cart.module.css'
import CartItem from './CartItem.jsx'
import {itemsData} from './itemsData.js'

let priceTotal= 0
function sumPrice () {
  priceTotal= 0
  for( let i = 0; i < itemsData.length; i++ ) {
    priceTotal += itemsData[i].price * itemsData[i].quantity;
}
return (priceTotal)
}

export default function Cart () {
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <CartItem />
      <hr></hr>
      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <hr></hr>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>{sumPrice()}</div>
      </section>
    </section>
  )
}




