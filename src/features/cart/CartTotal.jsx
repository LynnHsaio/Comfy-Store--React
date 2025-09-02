import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import styles from "./CartTotal.module.scss";

export default function CartTotal() {
  const cart = useSelector((store) => store.cart.cart);

  const subtotal = cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0);
  const shipping = 500;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  return (
    <div className={styles.cartTotal}>
      <p className="border-base-300 text-xs ">
        <span>Subtotal</span>{" "}
        <span className="font-medium">{formatCurrency(subtotal)}</span>
      </p>
      <p className="border-base-300 text-xs ">
        <span>Shipping</span>
        <span className="font-medium">{formatCurrency(shipping)}</span>
      </p>
      <p className="border-base-300 text-xs ">
        <span>Tax</span>

        <span className="font-medium">{formatCurrency(tax)}</span>
      </p>
      <p className="text-sm">
        <span>Order Total</span>
        <span className="font-medium">{formatCurrency(total)}</span>
      </p>
    </div>
  );
}
