import { NavLink } from "react-router-dom";
import styles from "./navlinks.module.scss";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/cart", label: "Cart" },
  { path: "/checkout", label: "Checkout" },
  { path: "/orders", label: "Orders" },
];

export default function NavLinks() {
  return (
    <ul className={styles.navLinks}>
      {links.map((link) => (
        <li key={link.label}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `${styles.btn} ${isActive ? styles.active : ""}`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
