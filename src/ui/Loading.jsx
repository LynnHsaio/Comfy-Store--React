import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <span className="loading"></span>
    </div>
  );
}
