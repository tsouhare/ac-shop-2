import styles from './StepProgress.module.css'


export default function StepProgress() {
  const steps = [
    { step: "address", title: "寄送地址" },
    { step: "shipping", title: "運送方式" },
    { step: "credit-card", title: "付款資訊" },
  ]
  let stepLength = steps.length

  return (
    <>
      <section>
        <h2 class="registerTitle">結帳</h2>

        <div className={styles.container}>
          {steps.map((steps, index) => (
            <div data-phase={steps.step} key={index} className={styles.stepContainer}>
              <span className={styles.stepsIcon}>{index + 1}</span>
              <span className={styles.title}>{steps.title}</span>
              {index < stepLength-1 && <span className={styles.bar} data-order={index + 1}></span>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}