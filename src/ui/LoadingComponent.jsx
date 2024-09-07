import styles from './LoadingComponent.module.css';
function LoadingComponent() {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-200/50 backdrop-blur-sm">
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
    </div>
  );
}

export default LoadingComponent;
