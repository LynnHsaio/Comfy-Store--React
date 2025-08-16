import { useNavigate } from "react-router-dom";

export default function ProductItem({ item }) {
  const { image, title, price } = item.attributes;
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/products/${item.id}`);
  }

  return (
    <div onClick={handleNavigate}>
      <img src={image} alt={title} style={{ width: "100%" }} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}
