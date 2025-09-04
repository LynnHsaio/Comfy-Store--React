import CartList from "../features/cart/CartList";
import CartTotal from "../features/cart/CartTotal";
import SectionTitle from "../ui/SectionTitle";
import styles from "./Cart.module.scss";

export default function Cart() {
  return (
    <section>
      <SectionTitle title="Shopping Cart" />

      <div className={styles.container}>
        <CartList />
        <CartTotal />
      </div>
    </section>
  );
}
