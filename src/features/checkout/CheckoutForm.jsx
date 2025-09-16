import useForm from "../../hooks/useForm";
import useCreateCheckout from "./useCreateCheckout";
import { useSelector, useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import styles from "./CheckoutForm.module.scss";
import { useNavigate } from "react-router-dom";
import { clear } from "../cart/cartSlice";

const initialForm = {
  name: "",
  address: "",
};

export default function CheckoutForm() {
  const { form, resetForm, handleChange } = useForm(initialForm);
  const { createOrder, isCreatingOrder } = useCreateCheckout();
  const { cart } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const chargeTotal = cart.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );

    const orderData = {
      ...form,
      cartItems: cart,
      numItemsInCart: cart.length,
      chargeTotal,
      orderTotal: formatCurrency(chargeTotal),
    };

    createOrder(orderData, {
      onSuccess: () => {
        resetForm();
        navigate("/orders");
        dispatch(clear());
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className="ont-medium text-lg">Shipping Information</h2>

      <div>
        <label htmlFor="name" className="text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="address" className="text-sm font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className={styles.input}
          value={form.address}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn-primary" disabled={isCreatingOrder}>
        {isCreatingOrder ? "Processing..." : "PLACE YOUR ORDER"}
      </button>
    </form>
  );
}
