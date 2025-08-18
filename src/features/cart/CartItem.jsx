import { useState } from "react";
import Select from "../../ui/Select";
import { useDispatch } from "react-redux";
import { remove, update } from "./cartSlice";

const amountOptions = Array.from({ length: 20 }, (_, i) => i + 1);

export default function CartItem({ item }) {
  const {
    id,
    attributes: { image, title, company, price },
    color,
    amount,
  } = item;

  const [itemAmount, setItemAmount] = useState(amount);
  const dispatch = useDispatch();

  function handleChange(e) {
    setItemAmount(e.target.value);
    dispatch(update({ ...item, amount: e.target.value }));
  }

  function handleRemove() {
    dispatch(remove({ id }));
  }

  return (
    <div>
      <img src={image} alt={title} style={{ height: "10rem" }} />
      <h3>{title}</h3>
      <p>{company}</p>

      <Select
        name="amount"
        label="Amount"
        options={amountOptions}
        value={itemAmount}
        onChange={handleChange}
      />

      <p>{price}</p>

      <p>
        Color:
        <span
          style={{
            display: "inline-block",
            padding: "1rem",
            backgroundColor: color,
          }}
        ></span>
      </p>

      <button onClick={handleRemove}>remove</button>
    </div>
  );
}
