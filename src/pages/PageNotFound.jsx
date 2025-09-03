import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.scss";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className={`${styles.pageNotFound} align-element `}>
      <div className={styles.box}>
        <h2 className="text-9xl text-primary">404</h2>
        <h1 className="text-6xl mb-6">page not found</h1>
        <p className="text-lg mb-10">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <button className="btn-primary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </main>
  );
}
