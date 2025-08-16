import ProductsTable from "../features/Products/ProductsTable";
import SearchOperation from "../features/Products/SearchOperation";

export default function Products() {
  return (
    <div>
      <SearchOperation />
      <ProductsTable />
    </div>
  );
}
