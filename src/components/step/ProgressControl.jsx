import styles from './ProgressControl.module.css'
import leftArrow from '../../assets/icons/left-arrow.svg'
import rightArrow from '../../assets/icons/right-arrow.svg'

export default function ProgressControlButton () {
  return (
  <>
    <hr />
    <section className={styles.buttonBox}>
      <div className={styles.back} data-phase="shipping">
         <img className={styles.leftArrow} src={leftArrow} alt="leftArrow" />  上一步
      </div>
      <div className={styles.next} data-phase="address">
        下一步  <img src={rightArrow} alt="rightArrow" />
      </div>
    </section>
  </>
  )
}