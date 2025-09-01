import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./AppLayout.module.scss";

export default function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Navbar />

      <main>
        <div className="align-element">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
