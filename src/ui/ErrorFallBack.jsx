import styles from "./ErrorFallBack.module.scss";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className={`${styles.errorFallBack} align-element `}>
      <div className={styles.box}>
        <h1 className="text-6xl mb-6">Something went wrong</h1>
        <p className="text-lg mb-10">{error.message}</p>
        <button className="btn-primary" onClick={resetErrorBoundary}>
          Go Back Home
        </button>
      </div>
    </main>
  );
}
