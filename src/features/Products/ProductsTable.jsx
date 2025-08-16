import ProductItem from "../../ui/ProductItem";
import useFilteredProducts from "./useFilteredProducts";

export default function ProductsTable() {
  const { isLoading, data } = useFilteredProducts();

  if (isLoading) return <div>Loading</div>;

  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {data.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </section>
  );
}
