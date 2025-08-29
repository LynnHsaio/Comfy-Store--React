import CartList from "../features/cart/CartList";
import CartTotal from "../features/cart/CartTotal";
import SectionTitle from "../ui/SectionTitle";

export default function Cart() {
  return (
    <div>
      <SectionTitle title="Shopping Cart" />

      <CartList />
      <CartTotal />
    </div>
  );
}
