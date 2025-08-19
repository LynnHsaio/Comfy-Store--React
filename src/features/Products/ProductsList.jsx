import ProductItem from "../../ui/ProductItem";

export default function ProductsList({ list }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {list.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
}
