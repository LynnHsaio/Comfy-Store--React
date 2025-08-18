import { useSelector } from "react-redux";
import CartItem from "../features/cart/CartItem";

export default function Cart() {
  const cart = useSelector((store) => store.cart.cart);

  if (!cart.length) return <h2>empty</h2>;

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
