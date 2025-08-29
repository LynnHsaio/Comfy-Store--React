import Select from "../../ui/Select";
import { useDispatch } from "react-redux";
import { remove, update } from "./cartSlice";
import { amountOptions } from "../../utils/constant";
import { formatPrice } from "../../../../final/src/utils";

export default function CartItem({ item }) {
  const { cartId, image, title, company, price, color, amount } = item;
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(update({ cartId, amount: Number(e.target.value) }));
  }

  function handleRemove() {
    dispatch(remove({ cartId }));
  }

  return (
    <article>
      <div>
        <img src={image} alt={title} style={{ height: "10rem" }} />
      </div>

      <div>
        <h3>{title}</h3>
        <h4>{company}</h4>
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
      </div>

      <form>
        <Select
          name="amount"
          label="Amount"
          options={amountOptions}
          value={amount}
          onChange={handleChange}
        />
        <button onClick={handleRemove}>remove</button>
      </form>

      <div>
        <p>{formatPrice(price)}</p>
      </div>
    </article>
  );
}
