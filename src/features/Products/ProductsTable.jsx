import useFilteredProducts from "./useFilteredProducts";
import ProductsList from "./ProductsList";
import Pagination from "../../ui/Pagination";

export default function ProductsTable() {
  const { isLoading, data } = useFilteredProducts();

  if (isLoading) return <div>Loading</div>;

  const { total } = data.meta.pagination;

  return (
    <section>
      <p>{total} products</p>

      <ProductsList list={data.data} />

      <Pagination pagination={data.meta.pagination} />
    </section>
  );
}
