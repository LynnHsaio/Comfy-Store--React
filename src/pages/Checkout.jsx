import { useSelector } from "react-redux";
import SectionTitle from "../ui/SectionTitle";
import CartTotal from "../features/cart/CartTotal";
import CheckoutForm from "../features/checkout/CheckoutForm";
import styles from "./Checkout.module.scss";

export default function CheckOut() {
  const cartLength = useSelector((store) => store.cart.cart.length);

  if (!cartLength) return <SectionTitle title="Your cart is empty" />;

  return (
    <section>
      <SectionTitle title="Place Your Order" />

      <div className={styles.container}>
        <CheckoutForm />
        <CartTotal />
      </div>
    </section>
  );
}
