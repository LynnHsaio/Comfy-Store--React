import useProduct from "../features/Products/useProduct";
import Select from "../ui/Select";

export default function Product() {
  const { isLoading, data } = useProduct();

  if (isLoading) return <div>Loading</div>;

  const { image, title, company, price, description, colors } = data.attributes;
  const amountOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{price}</p>
      <p>{description}</p>

      <div>
        <p>Colors</p>
        {colors.map((color) => (
          <span
            style={{
              backgroundColor: color,
              padding: "20px",
              display: "inline-block",
            }}
            key={color}
          ></span>
        ))}
      </div>

      <Select label="Amount" options={amountOptions} />

      <button>Add To Bag</button>
    </div>
  );
}
