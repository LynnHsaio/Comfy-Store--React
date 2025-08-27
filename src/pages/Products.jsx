import ProductsSection from "../features/products/ProductsSection";
import SearchOperation from "../features/products/SearchOperation";

export default function Products() {
  return (
    <div>
      <SearchOperation />
      <ProductsSection />
    </div>
  );
}
