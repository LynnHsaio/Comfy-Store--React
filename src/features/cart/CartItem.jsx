import { useState } from "react";
import Select from "../../ui/Select";
import { useDispatch } from "react-redux";
import { remove, update } from "./cartSlice";
import { amountOptions } from "../../utils/constant";

export default function CartItem({ item }) {
  const { cartId, image, title, company, price, color, amount } = item;

  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(update({ ...item, amount: Number(e.target.value) }));
  }

  function handleRemove() {
    dispatch(remove({ cartId }));
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
        value={amount}
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
