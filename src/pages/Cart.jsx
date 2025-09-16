import { useSelector } from "react-redux";
import CartList from "../features/cart/CartList";
import CartTotal from "../features/cart/CartTotal";
import SectionTitle from "../ui/SectionTitle";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartLength = useSelector((store) => store.cart.cart?.length);

  if (!cartLength) return <SectionTitle title="Your cart is empty" />;

  return (
    <section>
      <SectionTitle title="Shopping Cart" />

      <div className={styles.container}>
        <CartList />

        <div className={styles.rightColumn}>
          <CartTotal />
          <Link to={"/checkout"} className="btn-primary">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
