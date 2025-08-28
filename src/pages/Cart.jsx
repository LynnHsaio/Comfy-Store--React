import CartList from "../features/cart/CartList";
import CartTotal from "../features/cart/CartTotal";

export default function Cart() {
  return (
    <div>
      <h2>Cart</h2>

      <CartList />
      <CartTotal />
    </div>
  );
}
