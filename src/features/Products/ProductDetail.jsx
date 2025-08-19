import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "../../ui/Select";
import ColorRadio from "../../ui/ColorRadio";
import { add } from "../cart/cartSlice";
import { amountOptions } from "../../utils/constant";
import { formatCurrency } from "../../utils/helpers";
import useProduct from "./useProduct";

export default function ProductDetail() {
  const { isLoading, data } = useProduct();
  const [form, setForm] = useState({
    color: "",
    amount: "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((curState) => ({ ...curState, [name]: value }));
  }

  function handleAdd(e) {
    e.preventDefault();
    dispatch(add({ ...data, ...form }));
  }

  useEffect(() => {
    if (data?.attributes?.colors?.length) {
      setForm((prev) => ({
        ...prev,
        color: data.attributes.colors[0],
        amount: amountOptions[0],
      }));
    }
  }, [data]);

  if (isLoading) return <div>Loading</div>;

  const {
    image,
    title,
    company,
    price,
    description,
    colors = [],
  } = data.attributes || {};

  return (
    <div>
      <img src={image} alt={title} style={{ height: "15rem" }} />
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{formatCurrency(price)}</p>
      <p>{description}</p>

      <form>
        <ColorRadio
          name="color"
          label="Colors"
          options={colors}
          value={form.color}
          onChange={handleChange}
        />

        <Select
          name="amount"
          label="Amount"
          options={amountOptions}
          value={form.amount}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>Add To Bag</button>
      </form>
    </div>
  );
}
