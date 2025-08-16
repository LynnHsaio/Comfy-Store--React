import ProductItem from "../../ui/ProductItem";
import useFeaturedProducts from "./useFeaturedProducts";

export default function FeaturedProducts() {
  const { isLoading, data } = useFeaturedProducts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {data.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}
