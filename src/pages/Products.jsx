import ProductsTable from "../features/products/ProductsTable";
import SearchOperation from "../features/products/SearchOperation";

export default function Products() {
  return (
    <div>
      <SearchOperation />
      <ProductsTable />
    </div>
  );
}
