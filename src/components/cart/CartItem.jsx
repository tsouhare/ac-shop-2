import styles from './Cart.module.css'
import MinusButton from '../../assets/icons/minus.svg'
import PlusButton from '../../assets/icons/plus.svg'
import {itemsData} from './itemsData.js'


function ProductsInfo({id, name, img, price, quantity }) {
  return(
    <div className={styles.productContainer} id={id} data-count="0" data-price={price}>
      <img className={styles.productImgContainer} alt={name} src={img} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <img className={styles.minusButton} src={MinusButton} alt="MinusButton" />
            <span className={styles.productCount}>{quantity}</span>
            <img className={styles.plusButton} src={PlusButton} alt="PlusButton" />
          </div>
        </div>
        <div className={styles.productPrice}>${price}</div>
      </div>
    </div>
  )
}

export default function CartItem() {
  return(
    <section className={styles.productList}>
      {itemsData.map(item => <ProductsInfo {...item} key={item.id}/>)}
    </section>
  )
}