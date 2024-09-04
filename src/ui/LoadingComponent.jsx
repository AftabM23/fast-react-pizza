import styles from "./LoadingComponent.module.css";
function LoadingComponent() {
  return (
    <div className={styles.dotSpinner}>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
      <div className={styles.dotSpinnerDot}></div>
    </div>
  );
}

export default LoadingComponent;
