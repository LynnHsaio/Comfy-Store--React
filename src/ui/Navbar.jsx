import CartIcon from "./CartIcon";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToogle from "./ThemeToogle";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`align-element ${styles.container}`}>
        <Logo />

        <NavLinks />

        <span className={styles.navbarEnd}>
          <ThemeToogle />
          <CartIcon />
        </span>
      </div>
    </nav>
  );
}
