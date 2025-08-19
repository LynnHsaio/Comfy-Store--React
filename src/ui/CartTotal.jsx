import { useSelector } from "react-redux";
import { formatCurrency } from "../utils/helpers";

export default function CartTotal() {
  const cart = useSelector((store) => store.cart.cart);

  const subtotal = cart.reduce(
    (acc, cur) => acc + cur.attributes.price * cur.amount,
    0
  );
  const shipping = 500;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  return (
    <div>
      <p>
        Subtotal <span>{formatCurrency(subtotal)}</span>
      </p>
      <p>
        Shipping <span>{formatCurrency(shipping)}</span>
      </p>
      <p>
        Tax <span>{formatCurrency(tax)}</span>
      </p>
      <p>
        Order Total <span>{formatCurrency(total)}</span>
      </p>
    </div>
  );
}
