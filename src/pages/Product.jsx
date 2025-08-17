import { useState } from "react";
import useProduct from "../features/Products/useProduct";
import Select from "../ui/Select";
import ColorRadio from "../ui/ColorRadio";

export default function Product() {
  const { isLoading, data } = useProduct();
  const [form, setForm] = useState({ color: "", amount: "1" });

  if (isLoading) return <div>Loading</div>;

  const { image, title, company, price, description, colors } = data.attributes;
  const amountOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((curState) => ({ ...curState, [name]: value }));
  }

  return (
    <div>
      <img src={image} alt={title} style={{ height: "15rem" }} />
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{price}</p>
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

        <button>Add To Bag</button>
      </form>
    </div>
  );
}
