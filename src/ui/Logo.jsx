import { NavLink } from "react-router-dom";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <NavLink className={`btn-primary ${styles.logo}`} to="/">
      C
    </NavLink>
  );
}
