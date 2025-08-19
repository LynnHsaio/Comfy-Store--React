import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartList() {
  const cart = useSelector((store) => store.cart.cart);

  if (!cart.length) return <h2>empty</h2>;

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={`${item.id}-${item.color}`} item={item} />
      ))}
    </div>
  );
}
