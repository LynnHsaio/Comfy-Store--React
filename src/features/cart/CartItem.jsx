import Select from "../../ui/Select";
import { useDispatch } from "react-redux";
import { remove, update } from "./cartSlice";
import { amountOptions } from "../../utils/constant";
import { formatPrice } from "../../../../final/src/utils";
import styles from "./CartItem.module.scss";

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
    <article className={`${styles.cartItem} border-base-300`}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>

      <div className={`${styles.info}  text-sm`}>
        <h3>{title}</h3>
        <h4 className="text-neutral-content">{company}</h4>
        <p className={styles.color}>
          Color :
          <span
            style={{
              backgroundColor: color,
            }}
          ></span>
        </p>
      </div>

      <form className={`${styles.amount} text-sm`}>
        <Select
          name="amount"
          label="Amount"
          options={amountOptions}
          value={amount}
          onChange={handleChange}
        />

        <button className="btn-text" onClick={handleRemove}>
          remove
        </button>
      </form>

      <div className={`${styles.price} font-medium`}>
        <p>{formatPrice(price)}</p>
      </div>
    </article>
  );
}
