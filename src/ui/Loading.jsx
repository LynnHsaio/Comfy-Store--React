import styles from "./Loading.module.scss";

export default function Loading({ fullscreen = false }) {
  return (
    <div
      className={`${styles.loadingContainer} ${
        fullscreen ? styles.fullscreen : ""
      }`}
    >
      <span className="loading"></span>
    </div>
  );
}
