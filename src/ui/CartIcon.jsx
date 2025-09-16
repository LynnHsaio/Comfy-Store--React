import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CartIcon.module.scss";

export default function CartIcon() {
  const cartAmount = useSelector((store) =>
    store.cart.cart?.reduce((acc, cur) => acc + cur.amount, 0)
  );

  return (
    <NavLink to="/cart" className={styles.cartIcon}>
      <BsCart3 />
      <span className={styles.cartAmount}>{cartAmount}</span>
    </NavLink>
  );
}
